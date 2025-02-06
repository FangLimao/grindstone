import { consumeDurability, setEquipmentItem } from "@grindstone/utils";
import { ItemStack, Entity, ItemDurabilityComponent } from "@minecraft/server";

/**
 * 物品损坏后触发的事件
 */
export class ItemBreakAfterEvent {
  private constructor() {}
  /**
   * @remarks
   * 损坏的物品
   */
  itemStack!: ItemStack;
  /**
   * @remarks
   * 引发事件的玩家
   */
  readonly source!: Entity;
}

/**
 * 当物品的耐久值应当发生变化时，处理手持的物品
 * @param durability 应当消耗的耐久
 * @param item 手持的物品
 * @param entity 持有物品的实体
 * @param event 物品若损坏，触发的事件
 */
export function disposeItem(
  durability: number,
  item: ItemStack,
  entity: Entity,
  event?: (eventData: ItemBreakAfterEvent) => void,
  debug: boolean = false
): void {
  const newItem = consumeDurability(item, durability, entity);
  setEquipmentItem(entity, newItem);
  if (!newItem && event) {
    event({
      itemStack: item,
      source: entity,
    });
  }
  if (debug) {
    const component = newItem?.getComponent(
      "durability"
    ) as ItemDurabilityComponent;
    console.log("物品ID：" + item.typeId);
    console.log("现在的损坏值：" + component?.damage);
  }
}
