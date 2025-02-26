import { Player, RawMessage, world } from "@minecraft/server";
import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { DisplayCondition } from "@grindstone/common";

export let articleList: (ArticleCenter | Article)[] = [];
export let articleIdList: string[] = [];

/**
 * Registried article collection's display.
 * @param item
 */
function registriesDisplay(item: ArticleCenter) {
  if (item.displayCondition.default === true) {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === item.id) item.display(event.source);
    });
  }
  if (item.displayCondition.firstLoad === true) {
    world.afterEvents.playerSpawn.subscribe((event) => {
      if (event.initialSpawn) item.display(event.player);
    });
  }
  if (item.displayCondition.itemStack) {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === item.displayCondition.itemStack?.typeId)
        item.display(event.source);
    });
  }
}

/**
 * 根据提供的资源生成文章文本
 * @param reader 阅读者
 * @param text 原始的文本资源
 * @returns
 */
function generateArticleText(
  reader: Player,
  text: ArticleText
): string | RawMessage {
  if (typeof text === "string") return text;
  if (typeof text === "function") return text(reader);
  return text;
}

/**
 * 文章文本类型
 */
export type ArticleText =
  | string
  | RawMessage
  | ((reader: Player) => string | RawMessage);

/**
 * 创建一个文章
 */
export class Article {
  /**
   * @param id 文章ID
   * @param title 文章标题
   * @param body 文章内容，支持字符串、RawMessage 和动态生成
   * @param iconPath 文章的图标路径
   * @param needUnlock 是否需要解锁
   */
  constructor(
    public readonly id: string,
    public title: ArticleText,
    public body: ArticleText,
    public iconPath?: string,
    public needUnlock = true
  ) {}
  /**
   * 向玩家展示文章
   * @param player 要展示文章的玩家
   * @param backTo 关闭文章后返回的界面
   */
  display(player: Player, backTo?: ArticleCenter | Article): void {
    if (!this.checkUnlock(player)) this.unlock(player);
    const title = generateArticleText(player, this.title);
    const body = generateArticleText(player, this.body);
    const mainForm = new ActionFormData()
      .title(title)
      .body(body)
      .button({ translate: "gui.ok" });
    mainForm.show(player).then((response) => {
      if (response.selection === 0 || response.canceled) {
        backTo?.display(player);
        return;
      }
    });
  }
  /**
   * 在文章中心里解锁文章
   * @param player
   */
  unlock(player: Player): void {
    player.addTag(`articleUnlock:${this.id}`);
  }
  /**
   * 检查文章是否在文章中心里解锁
   * @param player
   */
  checkUnlock(player: Player): boolean {
    if (!this.needUnlock) {
      return true;
    } else {
      return player.hasTag(`articleUnlock:${this.id}`);
    }
  }
  /**
   * 向文章管理器中添加文章
   */
  private pushToManager(): void {
    articleList.push(this);
    articleIdList.push(this.id);
  }
  /**
   * 注册文章事件
   * @param typeId 文章的物品ID
   */
  subscribeEvent(typeId: string): void {
    this.pushToManager();
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === typeId) this.display(event.source);
    });
  }
  /**
   * 将该文章注册为自定义物品组件
   * @param componentName 自定义组件名称
   */
  registryComponent(componentName: string): void {
    this.pushToManager();
    world.beforeEvents.worldInitialize.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(componentName, {
        onUse: (callback) => {
          this.display(callback.source);
        },
      });
    });
  }
}

/**
 * Create an article with chapters.
 * @category Need Registry
 */
export class ChapterArticleBuilder extends Article {
  /**
   * @param id Article's id.
   * @param title Title of the article.
   * @param body Body of the article, support RawMessage.
   * @param chapters Chapters of the article.
   * @param iconPath Icon path of the article.
   * @param needUnlock If true, articles will be unlocked in the {@link ArticleCenter} after reading it.
   */
  constructor(
    public readonly id: string,
    public title: ArticleText,
    public body: ArticleText,
    public chapters: ChapterData[],
    public iconPath?: string,
    public needUnlock = true
  ) {
    super(id, title, body, iconPath, needUnlock);
  }
  /**
   * Display the reading to a player.
   */
  display(player: Player): void {
    if (!this.checkUnlock(player)) this.unlock(player);
    const title = generateArticleText(player, this.title);
    const body = generateArticleText(player, this.body);
    const contentsForm = new ActionFormData().title(title).body(body);
    this.chapters.forEach((chapter) => {
      const chapterTitle = generateArticleText(player, chapter.title);
      contentsForm.button(chapterTitle, chapter.iconPath);
    });
    contentsForm.show(player).then((response) => {
      if (response.canceled || response.selection === undefined) {
        return;
      }
      const chapterTitle = generateArticleText(
        player,
        this.chapters[response.selection].title
      );
      const chapterBody = generateArticleText(
        player,
        this.chapters[response.selection].body
      );
      const chapterForm = new ActionFormData()
        .title(chapterTitle)
        .body(chapterBody)
        .button({ translate: "gui.ok" });
      chapterForm.show(player).then((response) => {
        if (response.selection === 0 || response.canceled) {
          return;
        }
      });
    });
  }
}

/**
 * Create an article collection.
 * It likes {@link ChapterArticleBuilder}, but support article unlock.
 * @category Need Registry
 */
export class ArticleCenter {
  /**
   * @param id Collection's id.
   * @param title Title of the collection.
   * @param body Body of the collection.
   * @param displayCondition Control when collection is displayed.
   * @param articles Articles in the collection.
   */
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public displayCondition: DisplayCondition,
    public articles: (Article | ChapterArticleBuilder)[]
  ) {}
  /**
   * Display the reading to a player.
   */
  display(player: Player): void {
    let articleList: (Article | ChapterArticleBuilder)[] = [];
    const contentForm = new ActionFormData().title(this.title).body(this.body);
    this.articles.forEach((article) => {
      if (article.checkUnlock(player)) {
        const title = generateArticleText(player, article.title);
        contentForm.button(title, article.iconPath);
        articleList.push(article);
      }
    });
    if (articleList.length === 0) {
      const warningForm = new MessageFormData()
        .title({ translate: "article.nothing.title" })
        .body({ translate: "article.nothing.body" })
        .button1({ translate: "gui.ok" })
        .button2({ translate: "gui.close" });
      warningForm.show(player).then((response) => {
        if (
          response.selection === 0 ||
          response.selection === 1 ||
          response.canceled
        ) {
          return;
        }
      });
    } else {
      contentForm.show(player).then((response) => {
        if (response.canceled || response.selection === undefined) {
          return;
        }
        articleList[response.selection].display(player);
      });
    }
  }
  /**
   * Build the article collection.
   */
  build(): void {
    articleList.push(this);
    articleIdList.push(this.id);
    registriesDisplay(this);
  }
}

/**
 * Data of chapters.
 */
export interface ChapterData {
  /**
   * Title of the chapter.
   */
  title: ArticleText;
  /**
   * Body of the Chapter.
   */
  body: ArticleText;
  /**
   * Icon path of the chapter.
   */
  iconPath?: string;
}
