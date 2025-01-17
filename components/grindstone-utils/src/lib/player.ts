import { Container, ItemStack, Player, world } from "@minecraft/server";
import { getContainer, giveItem } from "./entity";
import { getItemAmountInContainer } from "./item";

/**
 * Get the required exp points by level.
 * @param level
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
 * Get the exp in all.
 * @param player
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
 * Give item to all player once.
 * @param entity The player to give item.
 * @param item The item to give.
 */
export function giveItemOnce(item: ItemStack): void {
  world.afterEvents.playerSpawn.subscribe(event=>{
    const contianer = getContainer(event.player) as Container;
    if(getItemAmountInContainer(contianer,item.typeId)===0){
      giveItem(event.player,item)
    }
  })
}