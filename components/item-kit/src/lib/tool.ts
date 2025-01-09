import { world, ItemStack, GameMode, Entity } from "@minecraft/server";
import {
  axeConvertBlockIds,
  DevkitError,
  hoeConvertBlockIds,
  shovelConvertBlockIds,
} from "@grindstone/common";
import {
  getEquipmentItem,
  consumeDurability,
  setEquipmentItem,
} from "@grindstone/utils";
import { ItemApiUtils, ToolUtils } from "../utils";

/**
 * The abstract tool.
 */
export abstract class Tool {
  constructor(
    readonly token: string,
    public options?: ToolOptions,
    public durabilitySettings?: ToolDurabilitySettings
  ) {
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 1;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 2;
      }
      if(!this.durabilitySettings.onUseOnBlock){
        this.durabilitySettings.onUseOnBlock = 1;
      }
    }
  }
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
      if (!this.durabilitySettings?.onDiggerBlock) throw new DevkitError();
      if (this.identify(ITEM)) {
        if (
          PLAYER.getGameMode() === GameMode.survival ||
          PLAYER.getGameMode() === GameMode.adventure
        ) {
          ItemApiUtils.disposeItem(
            this.durabilitySettings?.onDiggerBlock,
            ITEM,
            PLAYER,
            this.options?.destroyedAfterEvents
          );
        }
      }
    });
    // On hit entity
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const [ENTITY, ITEM] = [
        event.damagingEntity,
        getEquipmentItem(event.damagingEntity),
      ];
      if (!ITEM) return;
      if (this.identify(ITEM)) {
        ToolUtils.onHitEntityDurabilityDisposer(ENTITY, ITEM, this);
      }
    });
  }
  /**
   * Consume durability when the tool use on dirt as a shovel.
   */
  shovelDurabilityTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, BLOCK, PLAYER] = [
        event.itemStack,
        event.block,
        event.source,
      ];
      if (!ITEM) return;
      if (!this.durabilitySettings?.onUseOnBlock) throw new DevkitError();
      if (this.identify(ITEM) && shovelConvertBlockIds.includes(BLOCK.typeId)) {
        const newItem = consumeDurability(ITEM, this.durabilitySettings?.onUseOnBlock, PLAYER);
        setEquipmentItem(PLAYER, newItem);
        PLAYER.playSound("step.grass");
        if (!newItem && this.options?.destroyedAfterEvents) {
          this.options?.destroyedAfterEvents(PLAYER, ITEM);
        }
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
      if (!ITEM) return;
      if (!this.durabilitySettings?.onUseOnBlock) throw new DevkitError();
      if (this.identify(ITEM) && hoeConvertBlockIds.includes(BLOCK.typeId)) {
        const newItem = consumeDurability(ITEM, this.durabilitySettings?.onUseOnBlock, PLAYER);
        setEquipmentItem(PLAYER, newItem);
        PLAYER.playSound("step.gravel");
        if (!newItem && this.options?.destroyedAfterEvents) {
          this.options?.destroyedAfterEvents(PLAYER, ITEM);
        }
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
      if (!ITEM) return;
      if (!this.durabilitySettings?.onUseOnBlock) throw new DevkitError();
      if (this.identify(ITEM) && axeConvertBlockIds.includes(BLOCK.typeId)) {
        const newItem = consumeDurability(ITEM, this.durabilitySettings?.onUseOnBlock, PLAYER);
        setEquipmentItem(PLAYER, newItem);
        PLAYER.playSound("use.wood");
        if (!newItem && this.options?.destroyedAfterEvents) {
          this.options?.destroyedAfterEvents(PLAYER, ITEM);
        }
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
    public options?: ToolOptions,
    public durabilitySettings?: ToolDurabilitySettings
  ) {
    super(tag, options, durabilitySettings);
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 1;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 2;
      }
    }
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
    public options?: ToolOptions,
    public durabilitySettings?: ToolDurabilitySettings
  ) {
    super(typeId, options, durabilitySettings);
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 1;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 2;
      }
    }
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
}

export interface ToolDurabilitySettings {
  onDiggerBlock?: number;
  onHitEntity?: number;
  onUseOnBlock?: number;
}
