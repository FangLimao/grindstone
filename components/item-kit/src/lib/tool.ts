import { world, ItemStack, GameMode, Entity } from "@minecraft/server";
import {
  getEquipmentItem,
  consumeDurability,
  setEquipmentItem,
} from "@grindstone/utils";
import { ItemApiUtils } from "../utils";

/**
 * The abstract tool.
 */
export abstract class Tool {
  constructor(
    readonly token: string,
    public options?: ToolOptions
  ) {}
  /**
   * Identify the item.
   * @param item
   */
  abstract identify(item: ItemStack): boolean;
  /**
   * Build the tool.
   */
  build(): void {
    this.durabilityTrigger();
    if (this.options?.type === "shovel") {
      this.shovelDurabilityTrigger();
    }
    if (this.options?.type === "axe") {
      this.axeDurabilityTrigger();
    }
    if (this.options?.type === "hoe") {
      this.hoeDurabilityTrigger();
    }
  }
  /**
   * Automatically consume durability for the tools.
   */
  durabilityTrigger() {
    // On break block
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      const [PLAYER, ITEM] = [event.player, getEquipmentItem(event.player)];
      if (!ITEM) return;
      if (this.identify(ITEM)) {
        if (this.options?.closeDurabilityTrigger) {
          return;
        }
        if (
          PLAYER.getGameMode() === GameMode.survival ||
          PLAYER.getGameMode() === GameMode.adventure
        ) {
          ItemApiUtils.disposeItem(
            1,
            ITEM,
            PLAYER,
            this.options?.destroyedAfterEvents
          );
          console.log(this.token);
        }
      }
    });
  }
  /**
   * Consume durability when the tool use on dirt as a shovel.
   */
  shovelDurabilityTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      console.log("catch event!");
      const [ITEM, BLOCK, PLAYER] = [
        event.itemStack,
        event.block,
        event.source,
      ];
      if (this.identify(ITEM)) {
        if (!this.options?.closeUseDurabilityTrigger) {
          const newItem = consumeDurability(ITEM, 1, PLAYER);
          setEquipmentItem(PLAYER, newItem);
          if (!newItem && this.options?.destroyedAfterEvents) {
            this.options?.destroyedAfterEvents(PLAYER, ITEM);
          }
        }
        PLAYER.playSound("use.grass");
      }
    });
  }
  /**
   * Consume durability when the tool use on dirt as a hoe.
   */
  hoeDurabilityTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, BLOCK, PLAYER] = [
        event.itemStack,
        event.block,
        event.source,
      ];
      if (this.identify(ITEM)) {
        if (!this.options?.closeUseDurabilityTrigger) {
          const newItem = consumeDurability(ITEM, 1, PLAYER);
          setEquipmentItem(PLAYER, newItem);
          if (!newItem && this.options?.destroyedAfterEvents) {
            this.options?.destroyedAfterEvents(PLAYER, ITEM);
          }
        }
        PLAYER.playSound("step.gravel");
      }
    });
  }
  /**
   * Consume durability when the tool use on logs.
   */
  axeDurabilityTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, BLOCK, PLAYER] = [
        event.itemStack,
        event.block,
        event.source,
      ];
      if (this.identify(ITEM)) {
        if (!this.options?.closeUseDurabilityTrigger) {
          const newItem = consumeDurability(ITEM, 1, PLAYER);
          setEquipmentItem(PLAYER, newItem);
          if (!newItem && this.options?.destroyedAfterEvents) {
            this.options?.destroyedAfterEvents(PLAYER, ITEM);
          }
        }
        PLAYER.playSound("use.wood");
      }
    });
  }
}

/**
 * Define a tool tag.
 */
export class ToolTag extends Tool {
  /**
   * @param tag The tool tag.
   * @param options Additional options of the tool.
   */
  constructor(
    readonly tag: string,
    public options?: ToolOptions
  ) {
    super(tag, options);
  }
  identify(item: ItemStack): boolean {
    return item.hasTag(this.tag);
  }
}

/**
 * Define a tool.
 * @category Need Registry
 */
export class ToolItem extends Tool {
  /**
   * @param typeId
   * Identifier of the type of items for the stack.
   * If a namespace is not specified, 'minecraft:' is assumed.
   * Examples include 'wheat' or 'apple'.
   * @param options Additional options of the tool.
   */
  constructor(
    readonly typeId: string,
    public options?: ToolOptions
  ) {
    super(typeId, options);
  }
  identify(item: ItemStack): boolean {
    return item.typeId === this.typeId;
  }
}

/**
 * Type of the tool.
 */
export type ToolType = "axe" | "shovel" | "hoe" | "pickaxe" | "custom";

export interface ToolOptions {
  /**
   * Type of the tool.
   */
  type?: ToolType;
  /**
   * Trigger events when the tool has been destroyed.
   */
  destroyedAfterEvents?: (holder: Entity, item: ItemStack) => void;
  closeDurabilityTrigger?: boolean;
  closeUseDurabilityTrigger?: boolean;
}
