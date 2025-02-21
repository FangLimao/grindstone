import {
  Container,
  Dimension,
  Effect,
  EffectType,
  Entity,
  EntityEffectOptions,
  EntityEquippableComponent,
  EntityInventoryComponent,
  EntityQueryOptions,
  EquipmentSlot,
  ItemStack,
} from "@minecraft/server";
import {
  negativeEffectsId,
  positiveEffectsId,
  neutralEffectsId,
  EffectData,
} from "@grindstone/common";

/**
 * 向实体移除状态效果
 * @param entity 要清除效果的实体.
 * @param effectType 状态效果类型，可以是单个效果类型、效果类型数组、字符串、字符串数组或{@link EffectGroups}枚举值
 * @category Stable
 * @since 1.0.0
 */
export function clearEffect(
  entity: Entity,
  effectType: EffectType | EffectType[] | string | string[] | EffectGroups
): void {
  switch (effectType) {
    case EffectGroups.all:
      positiveEffectsId.forEach((effect) => {
        entity.removeEffect(effect);
      });
      negativeEffectsId.forEach((effect) => {
        entity.removeEffect(effect);
      });
      break;
    case EffectGroups.bad:
      negativeEffectsId.forEach((effect) => {
        entity.removeEffect(effect);
      });
      break;
    case EffectGroups.good:
      positiveEffectsId.forEach((effect) => {
        entity.removeEffect(effect);
      });
      break;
    case EffectGroups.nutral:
      neutralEffectsId.forEach((effect) => {
        entity.removeEffect(effect);
      });
      break;
    default:
      if (Array.isArray(effectType)) {
        effectType.forEach((effect) => {
          entity.removeEffect(effect);
        });
        return;
      }
      entity.removeEffect(effectType);
      break;
  }
}

/**
 * 向实体添加状态效果
 * @param entity 要添加状态效果实体对象
 * @param effectType 状态效果类型，可以是单个效果类型、效果类型数组、字符串、字符串数组或{@link EffectGroups}枚举值
 * @param duration 
 * 状态效果持续时间，以刻为单位 *（20刻=1秒）*
 *
 * 其值必须在范围`[0, 20000000]`内
 * @param options 状态效果选项
 * @category Stable
 * @since 1.0.0
 */
export function addEffect(
  entity: Entity,
  effectType: EffectType | EffectType[] | string | string[] | EffectGroups,
  duration: number,
  options?: EntityEffectOptions
): void {
  switch (effectType) {
    case EffectGroups.all:
      positiveEffectsId.forEach((effect) => {
        entity.addEffect(effect, duration, options);
      });
      negativeEffectsId.forEach((effect) => {
        entity.addEffect(effect, duration, options);
      });
      break;
    case EffectGroups.bad:
      negativeEffectsId.forEach((effect) => {
        entity.addEffect(effect, duration, options);
      });
      break;
    case EffectGroups.good:
      positiveEffectsId.forEach((effect) => {
        entity.addEffect(effect, duration, options);
      });
      break;
    case EffectGroups.nutral:
      neutralEffectsId.forEach((effect) => {
        entity.addEffect(effect, duration, options);
      });
      break;
    default:
      if (Array.isArray(effectType)) {
        effectType.forEach((effect: string | EffectType) => {
          entity.addEffect(effect, duration, options);
        });
        return;
      }
      entity.addEffect(effectType, duration, options);
      break;
  }
}

/**
 * 获取实体的容器
 * @param entity 要获取容器的实体
 * @return 实体的容器，如果没有则返回`undefined`
 * @category Stable
 * @since 1.0.0
 */
export function getContainer(entity: Entity): Container | undefined {
  const inventory = entity.getComponent(
    "minecraft:inventory"
  ) as EntityInventoryComponent;
  return inventory?.container;
}

/**
 * 设置实体的槽位物品
 * @param entity 要设置槽位物品的实体
 * @param slot 槽位索引，从0开始依次递增
 * @param item 要设置的物品
 * @category Stable
 * @since 1.0.0
 */
export function setSlot(entity: Entity, slot: number, item?: ItemStack): void {
  getContainer(entity)?.setItem(slot, item);
}

/**
 * 给予实体物品
 * @param entity 要给予物品的实体
 * @param item 要给予的物品
 * @category Stable
 * @since 1.0.0
 */
export function giveItem(entity: Entity[] | Entity, item: ItemStack): void {
  if (Array.isArray(entity)) {
    entity.forEach((entity) => {
      const container = getContainer(entity);
      if (container?.emptySlotsCount && container?.emptySlotsCount > 0) {
        container.addItem(item);
      } else {
        entity.dimension.spawnItem(item, entity.location);
      }
    });
  } else {
    const container = getContainer(entity);
    if (container?.emptySlotsCount && container?.emptySlotsCount > 0) {
      container.addItem(item);
    } else {
      entity.dimension.spawnItem(item, entity.location);
    }
  }
}

/**
 * 清空实体的容器
 * @param entity 要清空容器的实体
 * @category Stable
 * @since 1.0.0
 */
export function clearSlot(entity: Entity[] | Entity): void {
  if (Array.isArray(entity)) {
    entity.forEach((entity) => {
      getContainer(entity)?.clearAll();
    });
  } else {
    getContainer(entity)?.clearAll();
  }
}

/**
 * 获取给定实体的指定槽位物品
 * @param entity 要获取槽位的实体
 * @param slot 要获取的槽位，默认为 {@link EquipmentSlot.Mainhand}
 * @return 槽位中的物品
 * @category Stable
 * @since 1.0.0
 */
export function getEquipmentItem(
  entity: Entity,
  slot = EquipmentSlot.Mainhand
): ItemStack | undefined {
  const equipment = entity?.getComponent(
    "minecraft:equippable"
  ) as EntityEquippableComponent;
  return equipment?.getEquipment(slot);
}

/**
 * 设置给定实体的指定槽位物品
 * @param entity 要设置槽位的实体
 * @param item 要设置的物品，如果为undefined则清空该槽位
 * @param slot 要设置的槽位，默认为 {@link EquipmentSlot.Mainhand}
 * @category Stable
 * @since 1.0.0
 */
export function setEquipmentItem(
  entity: Entity,
  item?: ItemStack,
  slot: EquipmentSlot = EquipmentSlot.Mainhand
): boolean | undefined {
  const equipment = entity?.getComponent(
    "minecraft:equippable"
  ) as EntityEquippableComponent;
  return equipment?.setEquipment(slot, item);
}
/**
 * 对指定维度中的实体施加伤害
 * @param dimension 实体所处的维度
 * @param damageOption 实体查询选项
 * @param amount 伤害大小
 * @category Stable
 * @since 1.0.0
 */
export function damageEntities(
  dimension: Dimension,
  damageOption: EntityQueryOptions,
  amount: number
): void {
  const TARGET = dimension.getEntities(damageOption);
  TARGET.forEach((targets: Entity): void => {
    targets.applyDamage(amount);
  });
}

/**
 * 对指定维度中的实体施加效果
 * @param dimension 实体所处的维度
 * @param affectOption 实体查询选项
 * @param effectType 状态效果类型
 * @param duration 
 * 效果持续时间，以刻为单位 *（20刻=1秒）*
 *
 * 其值必须在范围`[0, 20000000]`内
 * @param effectOption 实体效果选项
 * @category Stable
 * @since 1.0.0
 */
export function affectEntities(
  dimension: Dimension,
  affectOption: EntityQueryOptions,
  effectType: EffectType | string,
  duration: number,
  effectOption?: EntityEffectOptions
): void {
  const TARGET = dimension.getEntities(affectOption);
  TARGET.forEach((targets: Entity): void => {
    targets.addEffect(effectType, duration, effectOption);
  });
}

/**
 * 将 {@link EffectData} 应用到实体上
 * @param entity 要应用 {@link EffectData} 的实体
 * @param data 要应用的 {@link EffectData}
 * @returns 应用后的状态效果
 * @category Stable
 * @since 1.0.0
 */
export function applyEffectData(
  entity: Entity,
  data: EffectData | EffectData[]
): Effect | Effect[] | undefined {
  if (Array.isArray(data)) {
    let result: Effect[] = [];
    data.forEach((effect) => {
      let eff = entity.addEffect(effect.effectType, effect.duration, {
        amplifier: effect.amplifier,
        showParticles: effect.showParticles,
      });
      if (eff) result.push(eff);
    });
    return result;
  } else {
    return entity.addEffect(data.effectType, data.duration, {
      amplifier: data.amplifier,
      showParticles: data.showParticles,
    });
  }
}

/**
 * 尝试对实体进行操作
 * @param entity 要操作的实体
 * @param operate 操作函数，接受一个实体作为参数
 * @returns 操作是否成功
 * @category Stable
 * @since 1.0.0
 */
export function tryOperateEntity(
  entity: Entity,
  operate: (entity: Entity) => void
): boolean {
  if (entity.isValid()) {
    operate(entity);
    return true;
  } else {
    return false;
  }
}

/**
 * 状态效果组
 * @category Stable
 * @since 1.0.0
 * @see https://zh.minecraft.wiki/w/状态效果
 */
export enum EffectGroups {
  /**
   * 正面效果
   */
  good,
  /**
   * 负面效果
   */
  bad,
  /**
   * 中性效果
   */
  nutral,
  /**
   * 所有效果
   */
  all,
}
