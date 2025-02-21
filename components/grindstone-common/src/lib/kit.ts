import { EffectType, ItemStack, RawMessage } from "@minecraft/server";

/**
 * 控制何时展示界面的条件
 * @category Stable
 * @since 1.0.0
 */
export interface DisplayCondition {
  /**
   * 默认情况
   */
  default?: boolean;
  /**
   * 当玩家使用物品时显示界面
   */
  itemStack?: ItemStack;
  /**
   * 当世界加载后显示界面
   */
  firstLoad?: boolean;
}

/**
 * 状态效果数据
 * @category Stable
 * @since 1.0.0
 */
export interface EffectData {
  /**
   * 状态效果类型
   */
  effectType: EffectType | string;
  /**
   * 状态效果持续时间，以刻为单位 *（20刻=1秒）*
   * 
   * 其值必须在范围`[0, 20000000]`内
   */
  duration: number;
  /**
   * 状态效果等级
   */
  amplifier?: number;
  /**
   * 是否展示状态效果粒子
   */
  showParticles?: boolean;
}

/**
 * 物品数据，包括其名称和物品堆
 * @category Stable
 * @since 1.0.0
 */
export interface ItemData {
  /**
   * 物品名称
   */
  name: RawMessage;
  /**
   * 物品堆
   */
  itemStack: ItemStack;
}

/**
 * 实体数据，包括其名称和物品堆
 * @category Stable
 * @since 1.0.0
 */
export interface EntityData {
  /**
   * 实体名称
   */
  name: string;
  /**
   * 实体ID
   */
  typeId: string;
}