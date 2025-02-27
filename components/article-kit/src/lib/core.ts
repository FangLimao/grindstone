import { Player, RawMessage, system, world } from "@minecraft/server";
import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { GrindstoneError } from "@grindstone/core";
import { ArticleManager } from "./manager";
import { generateArticleText, generateContentForm } from "./utils";

export let articleList: BaseArticle[] = [];
export let articleIdList: string[] = [];

/**
 * 文章文本类型
 * @category Stable
 * @since 1.0.0
 */
export type ArticleText =
  | string
  | RawMessage
  | ((reader: Player) => string | RawMessage);

/**
 * 基础的文章类
 * @category Stable
 * @since 1.0.0
 */
export abstract class BaseArticle {
  constructor(
    public readonly id: string,
    public title: ArticleText,
    public body: ArticleText,
    public data: any
  ) {}
  abstract display(player: Player, backTo?: BaseArticle): void;
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
    this.openToPlugin();
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
    this.openToPlugin();
    this.pushToManager();
    world.beforeEvents.worldInitialize.subscribe((arg) => {
      arg.itemComponentRegistry.registerCustomComponent(componentName, {
        onUse: (callback) => {
          this.display(callback.source);
        },
      });
    });
  }
  /**
   * 向插件公开该文章，使其可以通过其他模组打开
   * @private
   */
  private openToPlugin(): void {
    system.afterEvents.scriptEventReceive.subscribe((event) => {
      const id = this.id.replace(":", ".");
      if (event.id === `grindstone:openArticle.${id}`) {
        if (event.message) {
          const entity = world.getEntity(event.message);
          if (entity instanceof Player) this.display(entity);
        }
        if (event.sourceEntity instanceof Player)
          this.display(event.sourceEntity);
      }
    });
  }
}

/**
 * 创建一个文章
 */
export class Article extends BaseArticle {
  /**
   * @param id 文章ID
   * @param title 文章标题
   * @param body 文章内容，支持字符串、RawMessage 和动态生成
   * @param chapters 文章的章节
   * @param iconPath 文章的图标路径
   * @param needUnlock 是否需要解锁
   */
  constructor(
    public readonly id: string,
    public title: ArticleText,
    public body: ArticleText,
    public chapters?: ChapterData[],
    public iconPath?: string,
    public needUnlock = true
  ) {
    super(id, title, body, chapters);
  }
  /**
   * 向玩家展示文章（文章无章节时）
   * @param player 要展示文章的玩家
   * @param backTo 关闭文章后返回的界面
   * @private
   */
  private simpleDisplay(player: Player, backTo?: BaseArticle): void {
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
   * 向玩家展示文章（文章有章节时）
   * @param player 要展示文章的玩家
   * @param backTo 关闭文章后返回的界面
   * @private
   */
  private chapterDisplay(player: Player, backTo?: BaseArticle): void {
    if (!this.checkUnlock(player)) this.unlock(player);
    const [title, body] = [
      generateArticleText(player, this.title),
      generateArticleText(player, this.body),
    ];
    const contentsForm = new ActionFormData().title(title).body(body);

    if (!this.chapters) throw new GrindstoneError("无可用的章节数据！");
    this.chapters.forEach((chapter) => {
      const chapterTitle = generateArticleText(player, chapter.title);
      contentsForm.button(chapterTitle, chapter.iconPath);
    });

    contentsForm.show(player).then((response) => {
      if (response.canceled || response.selection === undefined) {
        backTo?.display(player);
        return;
      }
      if (!this.chapters) throw new GrindstoneError("章节数据无效！");
      const [chapterTitle, chapterBody] = [
        generateArticleText(player, this.chapters[response.selection].title),
        generateArticleText(player, this.chapters[response.selection].body),
      ];

      const chapterForm = new ActionFormData()
        .title(chapterTitle)
        .body(chapterBody)
        .button({ translate: "gui.ok" });
      chapterForm.show(player).then((response) => {
        if (response.selection === 0 || response.canceled) {
          contentsForm.show(player);
          return;
        }
      });
    });
  }
  /**
   * 向玩家展示文章
   * @param player 要展示文章的玩家
   * @param backTo 关闭文章后返回的界面
   */
  display(player: Player, backTo?: BaseArticle): void {
    if (!this.chapters) {
      this.simpleDisplay(player, backTo);
    } else {
      this.chapterDisplay(player, backTo);
    }
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
}

/**
 * 集中显示文章的类
 *
 * 核心功能包括：
 * - 显示文章列表给玩家
 * - 处理文章的解锁和显示
 *
 * 注意事项：
 * - 如果`articles`参数为布尔值，如果为`true`，则会从该脚本环境注册的所有文章中显示已经解锁的文章，反之则显示无文章提示
 * - 如果`articles`参数为文章列表，则只从提供的文章中显示已解锁的文章
 *
 * @example
 * const articleCenter = new ArticleCenter("article:id", title, body, true);
 * articleCenter.display(player); // 显示文章中心给玩家
 * articleCenter.subscribeEvent("itemId"); // 注册文章事件
 * articleCenter.registryComponent("componentName"); // 注册自定义组件
 *
 * @category Stable
 * @since 1.0.0
 */
export class ArticleCenter extends BaseArticle {
  /**
   * @param id 文章中心ID
   * @param title 文章中心标题
   * @param body 文章中心内容
   * @param articles 可用的文章，如果为`true`，则会从该脚本环境注册的所有文章中显示已经解锁的文章，反之则显示无文章提示，如果为文章列表，则只从提供的文章中显示已解锁的文章
   */
  constructor(
    public readonly id: string,
    public title: ArticleText,
    public body: ArticleText,
    public articles: Article[] | boolean
  ) {
    super(id, title, body, articles);
  }
  /**
   * 向玩家展示文章中心
   * @param player 要展示文章中心的玩家
   */
  display(player: Player): void {
    if (typeof this.articles === "boolean") {
      if (!this.articles) {
        this.noAvailableArticle(player);
        return;
      }
      const contentForm = generateContentForm(
        player,
        this.title,
        this.body,
        ArticleManager.getAllArticles()
      );
      if (!contentForm) {
        this.noAvailableArticle(player);
        return;
      }
      contentForm.form.show(player).then((response) => {
        if (response.canceled || response.selection === undefined) {
          return;
        }
        contentForm.list[response.selection].display(player, this);
      });
      return;
    }
    const contentForm = generateContentForm(
      player,
      this.title,
      this.body,
      this.articles
    );
    if (!contentForm) {
      this.noAvailableArticle(player);
      return;
    }
    contentForm.form.show(player).then((response) => {
      if (response.canceled || response.selection === undefined) {
        return;
      }
      contentForm.list[response.selection].display(player, this);
    });
  }
  /**
   * 当没有可用的文章时，向玩家显示提示
   * @param player 被显示提示的玩家
   * @private
   */
  private noAvailableArticle(player: Player): void {
    const warningForm = new MessageFormData()
      .title({ translate: "article.nothing.title" })
      .body({ translate: "article.nothing.body" })
      .button1({ translate: "gui.ok" })
      .button2({ translate: "gui.close" });
    warningForm.show(player).then((response) => {
      return;
    });
  }
}

/**
 * 文章的章节数据
 * @category Stable
 * @since 1.0.0
 */
export interface ChapterData {
  /**
   * 章节标题
   */
  title: ArticleText;
  /**
   * 章节内容
   */
  body: ArticleText;
  /**
   * 章节图标路径
   */
  iconPath?: string;
}
