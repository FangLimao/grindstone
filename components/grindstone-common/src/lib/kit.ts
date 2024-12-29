import { ItemStack } from "@minecraft/server";

/**
 * Display condition of articles/quests.
 */
export interface DisplayCondition {
  /**
   * Default condition like simple articles.
   */
  default?: boolean;
  /**
   * Display article when player use the item.
   */
  itemStack?: ItemStack;
  /**
   * Display article when player send the command.
   */
  command?: string | string[];
  /**
   * Display article when the world first load.
   */
  firstLoad?: boolean;
}
