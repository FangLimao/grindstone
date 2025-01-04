import { EffectType, ItemStack } from "@minecraft/server";

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

/**
 * Effect data.
 */
export interface EffectData {
  /**
   * Type of effect to add to the entity.
   */
  effectType: EffectType | string;
  /**
   * Amount of time, in ticks, for the effect to apply.
   * There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds.
   * The value must be within he range [0, 20000000].
   */
  duration: number;
  /**
   * The strength of the effect.
   */
  amplifier?: number;
  /**
   * If true, will show particles when effect is on the entity.
   */
  showParticles?: boolean;
}