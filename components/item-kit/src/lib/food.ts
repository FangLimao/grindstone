import { ItemCompleteUseAfterEvent, ItemFoodComponent, ItemStack, world } from "@minecraft/server";
import { EffectData } from "@grindstone/common";
import { applyEffectData } from "@grindstone/utils";

/**
 * Define a food item.
 */
export class FoodItemBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param statusEffects Adds a status effect when entity eat the food.
   * @param eatEvent This event fires when eat the food.
   */
  constructor(
    readonly typeId: string,
    public statusEffects?: EffectData[],
    public eatEvent?: (arg: ItemCompleteUseAfterEvent) => void
  ) {}
  /**
   * Get the food's item stack.
   * @returns 
   */
  getItemStack(): ItemStack{
    return new ItemStack(this.typeId);
  }
  /**
   * Build this food item.
   */
  build(): void {
    world.afterEvents.itemCompleteUse.subscribe((event) => {
      const [PLAYER, ITEM] = [event.source, event.itemStack];
      if (!(ITEM.typeId === this.typeId)) {
        return;
      }
      if (this.statusEffects) {
        applyEffectData(PLAYER, this.statusEffects);
      }
      if (this.eatEvent) {
        this.eatEvent(event);
      }
    });
  }
}
