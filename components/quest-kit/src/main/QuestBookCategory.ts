import { RawMessage, Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { QuestBookBuilder } from "./QuestBookBuilder";

/**
 * Book Category for {@link QuestBoardBuilder}.
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
    public books: QuestBookBuilder[],
    public iconPath?: string
  ) { }
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
