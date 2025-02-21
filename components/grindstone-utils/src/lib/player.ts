import { Container, ItemStack, Player, world } from "@minecraft/server";
import { getContainer, giveItem } from "./entity";
import { getItemAmountInContainer } from "./item";

/**
 * 根据玩家等级计算经验消耗
 * @param level 玩家等级
 * @category Stable
 * @since 1.0.0
 */
export function getExpCost(level: number): number {
  if (level >= 30) {
    return 62 + (level - 30) * 7;
  } else if (level >= 15) {
    return 17 + (level - 15) * 3;
  } else {
    return 17;
  }
}

/**
 * 获取玩家得到的所有经验值
 * @param player
 * @category Stable
 * @since 1.0.0
 */
export function getAllExp(player: Player): number {
  const level: number = player.level;
  let exp: number = 0;
  for (let i = 1; i <= level; i++) {
    exp += getExpCost(i);
  }
  return exp + player.xpEarnedAtCurrentLevel;
}

/**
 * 给予玩家一次物品
 * @param item 要给予的物品
 * @category Stable
 * @since 1.0.0
 */
export function giveItemOnce(item: ItemStack): void {
  world.afterEvents.playerSpawn.subscribe(event=>{
    const contianer = getContainer(event.player) as Container;
    if(getItemAmountInContainer(contianer,item.typeId)===0){
      giveItem(event.player,item)
    }
  })
}
