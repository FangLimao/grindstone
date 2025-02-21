import { GrindstoneError } from "@grindstone/core";
import {
  Container,
  Entity,
  ItemComponent,
  ItemComponentTypes,
  ItemDurabilityComponent,
  ItemStack,
  Player,
} from "@minecraft/server";

/**
 * 在容器中查找替换物品
 * @param item 要替换的物品，如果为`undefined`，则替换所有空槽
 * @param newItem 替换后的物品，如果为`undefined`，则清空所有物品
 * @param container 要搜索的容器
 * @category Stable
 * @since 1.0.0
 */
export function replaceItemStack(
  item: ItemStack | undefined,
  newItem: ItemStack | undefined,
  container: Container
): number {
  let amount: number = 0;
  for (let slot = 0; slot < container.size; slot++) {
    const itemStack: undefined | ItemStack = container.getItem(slot);
    if (itemStack?.typeId === item?.typeId) {
      container.setItem(slot, newItem);
      amount++;
    }
  }
  return amount;
}
/**
 * 添加物品的损坏值，即消耗其耐久
 * @param item 要添加损坏值的物品
 * @param value 要添加的损坏值
 * @param entity 当物品损坏时，向手持物品的实体播放声音
 * @returns 添加损坏值的 {@link ItemStack}
 * @category Stable
 * @since 1.0.0
 */
export function consumeDurability(
  item: ItemStack,
  value: number,
  entity?: Entity
): ItemStack | undefined {
  const durability: undefined | ItemComponent = item.getComponent(
    ItemComponentTypes.Durability
  );
  if (
    durability === undefined ||
    !(durability instanceof ItemDurabilityComponent)
  )
    return item;
  if (durability.damage + value >= durability.maxDurability) {
    if (entity instanceof Player) {
      entity.playSound("random.break");
    }
    return undefined;
  } else {
    durability.damage += value;
    return item;
  }
}

/**
 * 消耗物品的数量
 * @param item 要消耗物品的数量
 * @param value 要消耗的数量
 * @returns 消耗后的物品堆
 * @throws 如果物品数量不足，则抛出错误
 * @category Stable
 * @since 1.0.0
 */
export function consumeAmount(
  item: ItemStack,
  value: number
): ItemStack | undefined {
  const amount: number = item.amount;
  if (amount === value) return undefined;
  if (amount - value < 0)
    throw new GrindstoneError(
      `物品 ${item.typeId} 数量不足！当前数量： ${amount}，要移除的数量：${value}`
    );
  if (amount - value > item.maxAmount)
    throw new GrindstoneError(
      `物品 ${item.typeId} 最大数量不足！`
    );
  const newItem: ItemStack = item.clone();
  newItem.amount = amount - value;
  return newItem;
}

/**
 * 获取容器中指定物品的数量
 * @param container 容器对象
 * @param item 要获取的物品ID
 * @returns 容器中指定物品的数量
 * @category Stable
 * @since 1.0.0
 */
export function getItemAmountInContainer(
  container: Container,
  item: string // @TODO: 改为typeId
): number {
  let amount: number = 0;
  for (let slot = 0; slot < container.size; slot++) {
    const itemStack: undefined | ItemStack = container.getItem(slot);
    if (itemStack?.typeId === item) {
      amount = amount + itemStack.amount;
    }
  }
  return amount;
}

/**
 * 从容器中移除指定数量的物品
 * @param container 容器对象
 * @param itemId 物品ID
 * @param amount 要移除物品的数量
 * @category Stable
 * @since 1.0.0
 */
export function removeItemInContainer(
  container: Container,
  itemId: string, // @TODO: 改为typeId
  amount: number
): void {
  for (let slot = 0; slot < container.size; slot++) {
    const itemStack: undefined | ItemStack = container.getItem(slot);
    if (itemStack?.typeId === itemId) {
      if (itemStack.amount > amount) {
        itemStack.amount -= amount;
        container.setItem(slot, itemStack);
        return;
      }
      container.setItem(slot);
      amount -= itemStack.amount;
    }
  }
}

/**
 * 向物品添加新的Lore
 * @param loreText 要添加的Lore文本
 * @param item 要添加Lore文本的物品
 * @returns 更新Lore后的物品
 * @category Stable
 * @since 1.0.0
 */
export function pushLore(loreText: string, item: ItemStack): ItemStack {
  let lore = item.getLore();
  lore.push(loreText);
  item.setLore(lore);
  return item;
}
