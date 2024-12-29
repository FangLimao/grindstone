import { ItemStack } from "@minecraft/server";

/**
 * Display condition of articles/quests.
 */
export interface DisplayCondition {
  /**
   * Default condition.
   */
  default?: boolean;
  /**
   * Display article when player use the item.
   */
  itemStack?: ItemStack;
  /**
   * Display article when the world first load.
   */
  firstLoad?: boolean;
}
