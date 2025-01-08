import { RawMessage, Player, world } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";
import { Quest } from "./Quest";
import { QuestBoardBuilder } from "./QuestBoardBuilder";
import { QuestBookCategory } from "./QuestBookCategory";

/**
 * Create a quest book.
 */

export class QuestBookBuilder {
  /**
   * @param id The unique id of the quest book.
   * @param title  Title of the quest book.
   * @param body Body of the quest book.
   * @param quests Quests of the quest book.
   * @param iconPath
   * The icon of the book.
   * It should be the path from the root of the resource pack, like `texture/gui/example_pic`
   */
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public quests: Quest[],
    public iconPath?: string
  ) { }
  /**
   * Display the book to the player.
   * @param player
   * @param backTo The screen player should return to after closing the form.
   */
  display(
    player: Player,
    backTo?: QuestBookCategory | QuestBoardBuilder
  ): void {
    const FORM = new ActionFormData().title(this.title).body(this.body);
    this.quests.forEach((quest: Quest) => {
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
      } else this.quests[response.selection].display(player, this);
    });
  }
  /**
   * Add a quest.
   * @param quest
   * @param message Optional information will be sent to world.
   */
  addQuest(quest: Quest, message?: string | RawMessage): void {
    this.quests.push(quest);
    if (message) {
      world.sendMessage(message);
    }
  }
  /**
   * Get the quest by id.
   * @param id
   */
  getQuest(id: string): Quest | undefined {
    return this.quests.find((quest: Quest) => quest.id === id);
  }
  /**
   * Get all quests.
   */
  getQuests(): Quest[] {
    return this.quests;
  }
  /**
   * Build this quest book.
   */
  build(): void {
    world.afterEvents.itemUse.subscribe((event) => {
      if (this.id === event.itemStack.typeId) {
        this.display(event.source);
      }
    });
  }
}
