import { RawMessage, Player, world } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";
import { QuestChapter } from "../lib/interface";

/**
 * Create a Quest Book with Chapters.
 */

export class ChapterQuestBookBuilder {
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
  ) { }
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
      if (FinishList.every((value) => {
        return value;
      })) {
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
