import {
  EntityInventoryComponent,
  Player,
  RawMessage,
  world,
} from "@minecraft/server";
import { getItemAmountInContainer } from "@grindstone/utils";
import { Quest } from "../main/Quest";
import { QuestBoardBuilder } from "../main/QuestBoardBuilder";
import { QuestOptions } from "./interface";

/**
 * Some useful function for quest kit.
 */
export class QuestUtils {
  /**
  * Registried quest board's display.
  * @param item
  */
  static registriesDisplay(item: QuestBoardBuilder) {
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
   * Generate a quest body, including condition and award.
   * @param description Description of the quest.
   * @param data Data of the quest.
   * @returns The generated quest body.
   */
  static generateQuestBody(
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
   */
  static checkCondition(quest: Quest, player: Player): boolean {
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
}
