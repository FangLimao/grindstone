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
  TicksPerSecond,
  world,
} from "@minecraft/server";
import {
  negativeEffectsId,
  positiveEffectsId,
  neutralEffectsId,
  EffectData,
} from "@grindstone/common";
import { getItemAmountInContainer } from "./item";

/**
 * Wrapper function for removing effect(s) or effect group.
 * @param entity The entity to be removed effect.
 * @param effectType The effect(s) to remove, use {@link EffectGroups} to remove group effects.
 * @throws — This function can throw errors.
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
 * Wrapper function for adding effect(s) or effect group.
 * @param entity The entity to add effect.
 * @param effectType the effect(s) to add, use {@link EffectGroups} to add group effects.
 * @param duration
 * Amount of time, in ticks, for the effect to apply.
 * There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds.
 * The value must be within he range [0, 20000000].
 * @param options Additional options for the effect.
 * @throws This function can throw errors.
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
 * Get an entity's container.
 * @param entity
 */
export function getContainer(entity: Entity): Container | undefined {
  const inventory = entity.getComponent(
    "minecraft:inventory"
  ) as EntityInventoryComponent;
  return inventory?.container;
}

/**
 * Set an item stack within a particular slot.
 * @param entity
 * @param slot Zero-based index of the slot to set an item at.
 * @param item Stack of items to place within the specified slot.
 */
export function setSlot(entity: Entity, slot: number, item?: ItemStack): void {
  getContainer(entity)?.setItem(slot, item);
}

/**
 * Give entities item.
 * @param entity The entities to give item.
 * @param item The item(s) to give
 */
export function giveItem(entity: Entity[] | Entity, item: ItemStack): void {
  if (Array.isArray(entity)) {
    entity.forEach((entity) => {
      /**
       * Entity's container.
       */
      const container = getContainer(entity);
      if (container?.emptySlotsCount && container?.emptySlotsCount > 0) {
        container.addItem(item);
      } else {
        entity.dimension.spawnItem(item, entity.location);
      }
    });
  } else {
    /**
     * Entity's container.
     */
    const container = getContainer(entity);
    if (container?.emptySlotsCount && container?.emptySlotsCount > 0) {
      container.addItem(item);
    } else {
      entity.dimension.spawnItem(item, entity.location);
    }
  }
}

/**
 * Clear entities' slot.
 * @param entity The entities to clear slot.
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
 * Get a slot's item.
 * @param entity The owner of the slot.
 * @param slot The slot to get item stack.
 * @return Item of the slot, default is {@link EquipmentSlot.Mainhand}.
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
 * Replaces the item in the given EquipmentSlot.
 * @param entity The owner of the slot.
 * @param item The item to equip. If undefined, clears the slot.
 * @param slot The slot to set item stack, default is {@link EquipmentSlot.Mainhand}.
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
 * Damage entities within an area.
 * @param dimension Area's dimension.
 * @param damageOption Contains options for selecting entities within an area.
 * @param amount Amount of damage to apply.
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
 * Affect entities within an area.
 * @param dimension Area's dimension.
 * @param affectOption Contains options for selecting entities within an area.
 * @param effectType Type of effect to add to the entity.
 * @param duration
 * Amount of time, in ticks, for the effect to apply.
 * There are 20 ticks per second. Use TicksPerSecond constant to convert between ticks and seconds.
 * The value must be within the range [0, 20000000].
 * @param effectOption Additional options for the effect.
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
 * Apply {@link EffectData} to an entity.
 * @param entity
 * @param data
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
 * Try to operate an entity.
 * @param entity
 * @param operate
 * @return True if the entity is valid.
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
 * Groups of the effects.
 */
export enum EffectGroups {
  /**
   * Positive(good) effects.
   */
  good,
  /**
   * Negative(bad) effects.
   */
  bad,
  /**
   * Nutral effects.
   */
  nutral,
  /**
   * All effects.
   */
  all,
}
