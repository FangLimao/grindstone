import { giveItem } from "@grindstone/utils";
import { RawMessage, world, Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { QuestOptions } from "../lib/interface";
import { QuestManager } from "../lib/manager";
import { QuestUtils } from "../lib/utils";
import { QuestBookBuilder } from "./QuestBookBuilder";

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
  ) {
    if (this.options.condition.killEntity) {
      const entityData = this.options.condition.killEntity;
      world.afterEvents.entityDie.subscribe((event) => {
        if (event.deadEntity.typeId === entityData.typeId &&
          event.damageSource.damagingEntity instanceof Player) {
          const PLAYER = event.damageSource.damagingEntity;
          if (!this.isCompleted(PLAYER)) this.complete(PLAYER);
        }
      });
    }
  }
  /**
   * Show form to a player.
   * @param player
   * @param backTo The screen player should return to after closing the form.
   */
  display(player: Player, backTo?: QuestBookBuilder): void {
    const body = QuestUtils.generateQuestBody(this.body, this.options);
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
      if (response.canceled ||
        response.selection === undefined ||
        response.selection === 0 ||
        this.isCompleted(player)) {
        backTo?.display(player);
      } else if (response.selection === 1) {
        if (QuestUtils.checkCondition(this, player)) this.complete(player);
      }
    });
  }
  /**
   * Let a player complete the quest and give award.
   * @param player
   */
  complete(player: Player): void {
    player.addTag(`${QuestManager.getNameSpace()}:${this.id}`);
    player.addLevels(this.options.award.level ?? 0);
    player.addExperience(this.options.award.exp ?? 0);
    if (this.options.award?.item?.itemStack)
      giveItem([player], this.options.award?.item?.itemStack);
    if(this.options.award.custom)
      this.options.award.custom(player);
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
    return player.hasTag(`${QuestManager.getNameSpace()}:${this.id}`);
  }
  set body(content: string | RawMessage) {
    this._body = content;
    this.form.body(QuestUtils.generateQuestBody(content, this.options));
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
