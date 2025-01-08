import { Player, RawMessage } from "@minecraft/server";
import { Quest } from "../main/Quest";
import { EntityData, ItemData } from "@grindstone/common";

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
}/**
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
  /**
   * The custom award.
   * @param player 
   */
  custom?: (player: Player)=>void;
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

