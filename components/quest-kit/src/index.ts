import {
  Container,
  EntityInventoryComponent,
  Player,
  RawMessage,
  world,
} from "@minecraft/server";
import { getModId } from "@grindstone/core";
import {
  ActionFormData,
  ActionFormResponse,
  MessageFormData,
} from "@minecraft/server-ui";
import { ItemData, EntityData, DisplayCondition } from "@grindstone/common";
import { getItemAmountInContainer, giveItem } from "@grindstone/utils";

/**
 * Namespace of Quest Complete Tag.
 */
let questNameSpace: string = getModId();

/**
 * Create a Quest.
 * @category Need Registry
 */
export class Quest {
  protected form = new MessageFormData();

  /**
   * @param id The unique id of the quest.
   * @param _title Title of the quest.
   * @param _body Body of the quest.
   * @param options Options of the quest.
   */
  constructor(
    readonly id: string,
    protected _title: string | RawMessage,
    protected _body: string | RawMessage,
    public options: QuestOptions
  ) {}
  /**
   * Registry the quest.
   * @deprecated Use `Register.questRegistry()` to registry the prop
   */
  protected register() {
    console.warn("[Lazuli] The register method was deprecated!");
  }
  /**
   * Show form to a player.
   * @param player
   * @param backTo The screen player should return to after closing the form.
   */
  display(player: Player, backTo?: QuestBook): void {
    const body = generateQuestBody(this.body, this.options);
    if (this.isCompleted(player)) {
      this.form
        .title(this.title)
        .body(body)
        .button1({ translate: "gui.back" })
        .button2({ translate: "quest.done" });
    } else {
      this.form
        .title(this.title)
        .body(body)
        .button1({ translate: "gui.back" })
        .button2({ translate: "quest.check" });
    }
    this.form.show(player).then((response) => {
      if (
        response.canceled ||
        response.selection === undefined ||
        response.selection === 0 ||
        this.isCompleted(player)
      ) {
        backTo?.display(player);
      } else if (response.selection === 1) {
        if (checkCondition(this, player)) this.complete(player);
      }
    });
  }
  /**
   * Let a player complete the quest and give award.
   * @param player
   */
  complete(player: Player): void {
    player.addTag(`${questNameSpace}:${this.id}`);
    player.addLevels(this.options.award.level ?? 0);
    player.addExperience(this.options.award.exp ?? 0);
    if (this.options.award?.item?.itemStack)
      giveItem([player], this.options.award?.item?.itemStack);
    player.playSound("random.levelup");
    player.sendMessage({
      translate: "quest.finished",
    });
  }
  /**
   * Check if a player has completed this quest.
   * @param player
   */
  isCompleted(player: Player): boolean {
    return player.hasTag(`${questNameSpace}:${this.id}`);
  }
  set body(content: string | RawMessage) {
    this._body = content;
    this.form.body(generateQuestBody(content, this.options));
  }
  set title(content: string | RawMessage) {
    this._title = content;
    this.form.title(content);
  }
  get body() {
    return this._body;
  }
  get title() {
    return this._title;
  }
}

/**
 * Create a quest book.
 * @category Need Registry
 */
export class QuestBook {
  /**
   * @param id The unique id of the quest book.
   * @param title  Title of the quest book.
   * @param body Body of the quest book.
   * @param options Options of the quest book.
   * @param iconPath
   * The icon of the book.
   * It should be the path from the root of the resource pack, like `texture/gui/example_pic`
   */
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public options: QuestBookOptions,
    public iconPath?: string
  ) {}
  /**
   * Registry the prop.
   * @deprecated Use `Register.questRegistry()` to registry the prop
   */
  protected register() {
    console.warn("[Lazuli] The register method was deprecated!");
  }
  /**
   * Display the book to the player.
   * @param player
   * @param backTo The screen player should return to after closing the form.
   */
  display(player: Player, backTo?: QuestBookCategory | QuestBoard): void {
    const FORM = new ActionFormData().title(this.title).body(this.body);
    this.options.quests.forEach((quest: Quest) => {
      let rawTitle: RawMessage = {
        rawtext: [
          typeof quest.title === "string" ? { text: quest.title } : quest.title,
        ],
      };
      if (quest.isCompleted(player)) rawTitle.rawtext?.push({ text: " §2✔" });
      FORM.button(rawTitle, quest.options.iconPath);
    });
    FORM.show(player).then((response: ActionFormResponse) => {
      if (response.canceled || response.selection === undefined) {
        backTo?.display(player);
      } else this.options.quests[response.selection].display(player, this);
    });
  }
  /**
   * Add a quest.
   * @param quest
   * @param message Optional information will be sent to world.
   */
  addQuest(quest: Quest, message?: string | RawMessage): void {
    this.options.quests.push(quest);
    if (message) {
      world.sendMessage(message);
    }
  }
  /**
   * Get the quest by id.
   * @param id
   */
  getQuest(id: string): Quest | undefined {
    return this.options.quests.find((quest: Quest) => quest.id === id);
  }
  /**
   * Get all quests.
   */
  getQuests(): Quest[] {
    return this.options.quests;
  }
}

/**
 * Create a Quest Book with Chapters.
 * @category Need Registry
 */
export class ChapterQuestBook {
  /**
   * @param id The unique id of the quest book.
   * @param title  Title of the quest book.
   * @param body Body of the quest book.
   * @param chapters Chapters of the quest book.
   * @param iconPath
   * The icon of the book.
   * It should be the path from the root of the resource pack, like `texture/gui/example_pic`
   */
  constructor(
    public readonly id: string,
    protected title: string | RawMessage,
    protected body: string | RawMessage,
    public chapters: QuestChapter[],
    public iconPath?: string
  ) {}
  /**
   * Registry the prop.
   * @deprecated Use `Register.questRegistry()` to registry the prop
   */
  protected register() {
    console.warn("[Lazuli] The register method was deprecated!");
  }
  /**
   * Display the book to the player.
   * @param player
   */
  display(player: Player): void {
    const contentForm = new ActionFormData();
    contentForm.title(this.title).body(this.body);
    this.chapters.forEach((chapter: QuestChapter) => {
      let FinishList: boolean[] = [];
      let rawTitle: RawMessage = {
        rawtext: [
          typeof chapter.title === "string"
            ? { text: chapter.title }
            : chapter.title,
        ],
      };
      chapter.quests.forEach((quest) => {
        FinishList.push(quest.isCompleted(player));
      });
      if (
        FinishList.every((value) => {
          return value;
        })
      ) {
        rawTitle.rawtext?.push({ text: " §2✔" });
      }
      contentForm.button(rawTitle, chapter.iconPath);
    });
    contentForm.show(player).then((response: ActionFormResponse) => {
      if (response.canceled || response.selection === undefined) {
        return;
      }
      let selection = response.selection;
      const chapterForm = new ActionFormData()
        .title(this.chapters[selection].title)
        .body(this.chapters[selection].body);
      this.chapters[selection].quests.forEach((quest) => {
        let rawTitle: RawMessage = {
          rawtext: [
            typeof quest.title === "string"
              ? { text: quest.title }
              : quest.title,
          ],
        };
        if (quest.isCompleted(player))
          rawTitle.rawtext?.push({ text: " §2✔" });
        chapterForm.button(rawTitle, quest.options.iconPath);
      });
      chapterForm.show(player).then((response: ActionFormResponse) => {
        if (response.canceled || response.selection === undefined) {
          return;
        }
        this.chapters[selection].quests[response.selection].display(player);
      });
    });
  }
}

/**
 * Book Category for {@link QuestBoard}.
 */
export class QuestBookCategory {
  /**
   * @param title Title of the category.
   * @param body Body of the category.
   * @param books The quest books that included in category.
   * @param iconPath
   * The icon of the category.
   * It should be the path from the root of the resource pack, like `texture/gui/example_pic`.
   */
  constructor(
    public title: RawMessage | string,
    public body: RawMessage | string,
    public books: QuestBook[],
    public iconPath?: string
  ) {}
  /**
   * Display the category form to a player.
   * @param player
   */
  display(player: Player) {
    const form = new ActionFormData().title(this.title).body(this.body);
    this.books.forEach((book) => {
      form.button(book.title, book.iconPath);
    });
    form.show(player).then((response) => {
      if (response.canceled || response.selection === undefined) {
        return;
      }
      this.books[response.selection].display(player);
    });
  }
}

export class QuestBoard {
  /**
   * @param id The unique id of the board.
   * @param title Title of the board.
   * @param body Body of the board.
   * @param books Books of the board.
   * @param displayCondition Control when collection is displayed.
   */
  constructor(
    public readonly id: string,
    protected title: string | RawMessage,
    protected body: string | RawMessage,
    public books: (QuestBook | QuestBookCategory)[],
    public displayCondition: DisplayCondition
  ) {}

  /**
   * Display the board form to a player.
   * @param player
   */
  display(player: Player) {
    const form = new ActionFormData().title(this.title).body(this.body);
    this.books.forEach((book) => {
      form.button(book.title, book.iconPath);
    });
    form.show(player).then((response) => {
      if (response.canceled || !response.selection) {
        return;
      }
      this.books[response.selection].display(player);
    });
  }
}

/**
 * Set the namespace of Quest Complete Tag
 * @param str the namespace
 */
export function setQuestNameSpace(str: string) {
  questNameSpace = str;
}

/**
 * Generate a quest body, including condition and award.
 * @param description Description of the quest.
 * @param data Data of the quest.
 * @returns The generated quest body.
 * @category Utils
 */
function generateQuestBody(
  description: RawMessage | string,
  data: QuestOptions
): RawMessage {
  const [CONDITION, AWARD] = [data.condition, data.award];
  let body: RawMessage = {
    rawtext: [
      typeof description === "string" ? { text: description } : description,
      { text: "\n\n" },
      { translate: "quest.condition" },
    ],
  };
  if (CONDITION.item)
    body.rawtext?.push({
      translate: "quest.item",
      with: {
        rawtext: [
          {
            text: CONDITION.item.itemStack.amount.toString(),
          },
          CONDITION.item.name,
        ],
      },
    });
  if (CONDITION.playerXpPoint)
    body.rawtext?.push({
      translate: "quest.xp",
      with: [CONDITION.playerXpPoint.toString()],
    });
  if (CONDITION.playerXpLevel)
    body.rawtext?.push({
      translate: "quest.level",
      with: [CONDITION.playerXpLevel.toString()],
    });
  if (CONDITION.killEntity)
    body.rawtext?.push({
      translate: "quest.entity",
      with: [CONDITION.killEntity.name],
    });
  if (CONDITION.quests)
    body.rawtext?.push({
      translate: "quest.quests",
      with: [CONDITION.quests.length.toString()],
    });
  if (
    !CONDITION.item &&
    !CONDITION.playerXpLevel &&
    !CONDITION.playerXpPoint &&
    !CONDITION.killEntity &&
    !CONDITION.quests
  ) {
    body.rawtext?.push({
      translate: "quest.condition.none",
    });
  }
  body.rawtext?.push({ text: "\n" }, { translate: "quest.award" });
  if (AWARD.item)
    body.rawtext?.push({
      translate: "quest.item",
      with: {
        rawtext: [
          {
            text: AWARD.item.itemStack.amount.toString(),
          },
          AWARD.item.name,
        ],
      },
    });
  if (AWARD.exp)
    body.rawtext?.push({
      translate: "quest.xp",
      with: [AWARD.exp.toString()],
    });
  if (AWARD.level)
    body.rawtext?.push({
      translate: "quest.level",
      with: [AWARD.level.toString()],
    });
  if (!AWARD.item && !AWARD.level && !AWARD.exp) {
    body.rawtext?.push({
      translate: "quest.award.none",
    });
  }
  if (data.tips) {
    body.rawtext?.push(
      { text: "\n" },
      { translate: "quest.tips" },
      typeof data.tips === "string" ? { text: data.tips } : data.tips
    );
  }
  return body;
}

/**
 * Check if a player is up to the condition.
 * @param quest
 * @param player
 * @returns
 * @category Utils
 */
function checkCondition(quest: Quest, player: Player): boolean {
  let message: RawMessage = { rawtext: [] };
  const inventory = player.getComponent(
    "minecraft:inventory"
  ) as EntityInventoryComponent;
  const CONTAINER = inventory?.container;
  const CONDITION = quest.options.condition;
  if (!CONTAINER) {
    return false;
  }
  if (
    CONDITION.item &&
    getItemAmountInContainer(CONTAINER, CONDITION.item.itemStack.typeId) <
      CONDITION.item.itemStack.amount
  ) {
    message.rawtext?.push({
      rawtext: [
        {
          translate: "quest.not_enough.item",
          with: {
            rawtext: [
              {
                text: CONDITION.item.itemStack.amount.toString(),
              },
              CONDITION.item.name,
            ],
          },
        }, // Following items are missing from your inventory:
        {
          text: "\n",
        },
      ],
    });
  }
  if (CONDITION.playerXpLevel && player.level < CONDITION.playerXpLevel) {
    message.rawtext?.push({
      rawtext: [
        {
          translate: "quest.not_enough.level",
          with: [player.level.toString()],
        }, // You need %%1 more level(s)!
        {
          text: "\n",
        },
      ],
    });
  }
  if (
    CONDITION.playerXpPoint &&
    player.getTotalXp() < CONDITION.playerXpPoint
  ) {
    message.rawtext?.push({
      rawtext: [
        {
          translate: "quest.not_enough.xp",
          with: [player.getTotalXp.toString()],
        }, // You need %%1 more experience!
        {
          text: "\n",
        },
      ],
    });
  }
  if (CONDITION.quests) {
    let finishList: boolean[] = [];
    CONDITION.quests.forEach((quest) => {
      finishList.push(quest.isCompleted(player));
    });
    if (
      !finishList.every((value) => {
        return value;
      })
    ) {
      message.rawtext?.push({
        rawtext: [
          {
            translate: "quest.not_enough.quests",
            with: [CONDITION.quests.length.toString()],
          }, // You need %%1 more experience!
          {
            text: "\n",
          },
        ],
      });
    }
  }
  if (!quest.isCompleted(player) && CONDITION.killEntity) {
    message.rawtext?.push({
      rawtext: [
        {
          translate: "quest.not_enough.entity",
          with: [CONDITION.killEntity.name],
        },
      ],
    });
  }
  if (<number>message.rawtext?.length > 0) player.sendMessage(message);
  return <number>message.rawtext?.length === 0;
}

/**
 * Chapters of a quest book.
 */
export interface QuestChapter {
  /**
   * Title of the chapter.
   */
  title: string | RawMessage;
  /**
   * Body of the chapter.
   */
  body: string | RawMessage;
  /**
   * Quests of the chapter.
   */
  quests: Quest[];
  /**
   * The icon of the Chapter.
   * It should be the path from the root of the resource pack.
   * @example texture/gui/example_pic
   */
  iconPath?: string;
}

/**
 * Conditions of a quest.
 */
export interface QuestCondition {
  /**
   * Match only typeId and min amount.
   */
  item?: ItemData;
  /**
   * The specific level will be required to unlock the quest.
   */
  playerXpLevel?: number;
  /**
   * The specific point will be required to unlock the quest.
   */
  playerXpPoint?: number;
  /**
   * The specific entity will be required to unlock the quest.
   */
  killEntity?: EntityData;
  /**
   * The specific quests will be required to unlock the quest.
   */
  quests?: Quest[];
}

/**
 * Award of a quest.
 */
export interface QuestAward {
  /**
   * Player will get these items when the quest is finished.
   */
  item?: ItemData;
  /**
   * The specific level will be given to the player.
   */
  level?: number;
  /**
   * The specific point will be given to the player.
   */
  exp?: number;
}

/**
 * Options of a quest.
 */
export interface QuestOptions {
  /**
   * Condition to complete the quest.
   */
  condition: QuestCondition;
  /**
   * It will be called when the Quest is completed by the player.
   */
  award: QuestAward;
  /**
   * Tips of the quest.
   */
  tips?: RawMessage | string;
  /**
   * The icon of the Quest.
   * It should be the path from the root of the resource pack.
   * @example texture/gui/example_pic
   */
  iconPath?: string;
}

export interface QuestBookOptions {
  /**
   * Quests of the Questbook.
   */
  readonly quests: Quest[];
  /**
   * The icon of the Quest Book.
   * It should be the path from the root of the resource pack.
   * @example texture/gui/example_pic
   */
  iconPath?: string;
}
