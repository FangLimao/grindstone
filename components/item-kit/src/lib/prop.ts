import { consumeDurability, setEquipmentItem } from "@grindstone/utils";
import { ItemUseAfterEvent, world } from "@minecraft/server";
import { DevkitError } from "@grindstone/common";

/**
 * A simple prop *(an item that can be used)* , can only be used once.
 */
export class PropBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param useEvent The event when an item is successfully used by a player.
   */
  constructor(
    readonly typeId: string,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {}
  /**
   * Build the prop.
   */
  build() {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === this.typeId && this.useEvent) {
        this.useEvent(event);
        setEquipmentItem(event.source);
      }
    });
  }
}

/**
 * A prop *(an item that can be used)* , its durability is consumed after use.
 */
export class DurabilityLimitedPropBuilder extends PropBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param durabilityValue The durability to be consumed.
   * @param useEvent The event when an item is successfully used by a player.
   */
  constructor(
    readonly typeId: string,
    public durabilityValue: number,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {
    super(typeId, useEvent);
  }
  /**
   * Build the prop.
   */
  build() {
    world.afterEvents.itemUse.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (!(ITEM.typeId === this.typeId)) {
        return;
      }
      if (this.useEvent) {
        this.useEvent(event);
        setEquipmentItem(
          PLAYER,
          consumeDurability(ITEM, this.durabilityValue, PLAYER)
        );
      }
    });
  }
}

/**
 * A prop *(an item that can be used)* , it has a limited number of uses.
 */
export class NumberLimitedPropBuilder extends PropBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param options Options of the prop.
   * @param useEvent The event when an item is successfully used by a player.
   */
  constructor(
    readonly typeId: string,
    public options: NumberLimitedPropOptions,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {
    super(typeId, useEvent);
    if (!options.onceConsumed) {
      options.onceConsumed = 1;
    }
  }
  /**
   * Build the prop.
   */
  build() {
    const [MAX_USE, ONCE_CONS] = [
      this.options.maxUse,
      this.options.onceConsumed,
    ];
    if (!ONCE_CONS) {
      throw new DevkitError();
    }
    world.afterEvents.itemUse.subscribe((event) => {
      const [PLAYER, ITEM] = [event.source, event.itemStack];
      if (!(ITEM.typeId === this.typeId)) {
        return;
      }
      if (this.useEvent) {
        const useValue = ITEM.getDynamicProperty(
          "grindstone:use_value"
        ) as number;
        this.useEvent(event);
        if (useValue) {
          ITEM.setDynamicProperty("grindstone:use_value", useValue + ONCE_CONS);
        } else {
          ITEM.setDynamicProperty("grindstone:use_value", ONCE_CONS);
        }
        if (useValue > MAX_USE) {
          setEquipmentItem(PLAYER);
        }
      }
    });
  }
}

/**
 * Options of the prop.
 */
export interface NumberLimitedPropOptions {
  /**
   * The maximum use value of the item.
   */
  maxUse: number;
  /**
   *  Consumed use value when use the item, default is `1`.
   */
  onceConsumed?: number;
}
