import {
  consumeDurability,
  giveItem,
  setEquipmentItem,
} from "@grindstone/utils";
import { ItemStack, Entity, GameMode, Player } from "@minecraft/server";
import { Tool, ToolItem, ToolTag } from "./lib/tool";
import { RewardType } from "./lib/gift";
import { DevkitError } from "@grindstone/common";

/**
 * Some useful functions for Item Api.
 * @category Utils
 */
export class ItemApiUtils {
  /**
   * Dispose the tool or weapon when player use it.
   * @param durability The durability to reduce.
   * @param item The item to be used.
   * @param entity The entity that used the item.
   * @param event
   */
  static disposeItem(
    durability: number,
    item: ItemStack,
    entity: Entity,
    event?: (holder: Entity, item: ItemStack) => void
  ): void {
    const newItem = consumeDurability(item, durability, entity);
    setEquipmentItem(entity, newItem);
    if (!newItem && event) {
      event(entity, item);
    }
  }
}
/**
 * Some useful functions for Tool Api.
 * @category Utils
 */

export class ToolUtils {
  static onHitEntityDurabilityDisposer(
    holder: Entity,
    item: ItemStack,
    tool: Tool
  ) {
    if(!tool.durabilitySettings?.onHitEntity){
      throw new DevkitError();
    }
    if (holder instanceof Player) {
      if (
        holder.getGameMode() === GameMode.survival ||
        holder.getGameMode() === GameMode.adventure
      ) {
        ItemApiUtils.disposeItem(
          tool.durabilitySettings?.onHitEntity,
          item,
          holder,
          tool.options?.destroyedAfterEvents
        );
      }
    } else {
      ItemApiUtils.disposeItem(
        tool.durabilitySettings?.onHitEntity,
        item,
        holder,
        tool.options?.destroyedAfterEvents
      );
    }
  }
}

/**
 * Some useful functions for Gift Api.
 * @category Utils
 */

export class GiftUtils {
  /**
   * Give reward to a player.
   * @param player
   * @param giftReward
   * @param sound Plays a sound when player receive the reward.
   */
  static giveReward(player: Player, giftReward: RewardType, sound?: string) {
    if (giftReward.items) {
      const ITEMS = giftReward.items;
      ITEMS.forEach((item) => {
        giveItem(player, item);
      });
    }
    if (giftReward.exp) {
      player.addExperience(giftReward.exp);
    }
    if (giftReward.level) {
      player.addExperience(giftReward.level);
    }
    player.playSound(sound ?? "random.levelup");
  }
}
