import { DisplayCondition } from "@grindstone/common";
import { RawMessage, Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { QuestBookBuilder } from "./QuestBookBuilder";
import { QuestBookCategory } from "./QuestBookCategory";
import { QuestUtils } from "../lib/utils";


export class QuestBoardBuilder {
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
    public books: (QuestBookBuilder | QuestBookCategory)[],
    public displayCondition: DisplayCondition
  ) { }
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
  /**
   * Build this quest book.
   */
  build(): void {
    QuestUtils.registriesDisplay(this);
  }
}
