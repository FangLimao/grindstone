import { Entity, Player, RawMessage } from "@minecraft/server";
import { EffectData } from "@grindstone/common";
import { applyEffectData, getEquipmentItem } from "@grindstone/utils";
import { ItemApiUtils } from "../utils";

/**
 * Type to the weapon skill.
 * 
 * @deprecated
 */
export type WeaponSkillType = "attack" | "use" | "none";

/**
 * @deprecated
 */
export interface RangeEffectOptions {
  effect: EffectData;
  range: number;
}

/**
 * This event fires when the {@link WeaponSkill} is unleashed.
 * 
 * @deprecated
 */
export interface WeaponSkillEvent {
  /**
   * Apply damage to attacker.
   */
  damageAtker?: number;
  /**
   * Apply effect(s) to attacker.
   */
  effectAtker?: EffectData | EffectData[];
  /**
   * Apply effect to some entity.
   */
  rangeEffect?: RangeEffectOptions;
  /**
   * Add levels to attacker.
   */
  levels?: number;
  /**
   * Add experiences to attacker.
   */
  xp?: number;
  /**
   * This custom event fires when the {@link WeaponSkill} is unleashed.
   * @param attacker The attacker.
   * @param target The target, might be undefined.
   */
  custom?: (attacker: Entity, target?: Entity) => void;
}

/**
 * This event fires when the {@link WeaponAtkSkill} is unleashed.
 * 
 * @deprecated
 */
export interface WeaponSkillAtkEvent extends WeaponSkillEvent {
  /**
   * Apply damage to target.
   */
  damageTarget?: number;
  /**
   * Apply effect(s) to target.
   */
  effectTarget?: EffectData | EffectData[];
}

/**
 * Useful functions for {@link WeaponSkill} Api.
 * @category Utils
 */
export class WeaponSkillUtils {
  static unleash(skill: WeaponSkill, attacker: Entity) {
    if (skill.event === "empty") {
      return;
    }
    if (skill.durability && skill.durability > 0) {
      const ITEM = getEquipmentItem(attacker);
      if (!ITEM) {
        return;
      }
      ItemApiUtils.disposeItem(skill.durability, ITEM, attacker);
    }
    if (skill.actionBarTips && attacker instanceof Player) {
      attacker.onScreenDisplay.setActionBar(skill.actionBarTips);
    }
    const EVENT = skill.event;
    if (EVENT.rangeEffect) {
      const RANGE_EFFECT = EVENT.rangeEffect;
      attacker.dimension
        .getEntities({
          minDistance: 0,
          maxDistance: EVENT.rangeEffect.range,
        })
        .forEach((entity) => {
          applyEffectData(entity, RANGE_EFFECT.effect);
        });
    }
    if (EVENT.xp && attacker instanceof Player) {
      attacker.addExperience(EVENT.xp);
    }
    if (EVENT.levels && attacker instanceof Player) {
      attacker.addLevels(EVENT.levels);
    }
    if (EVENT.damageAtker) {
      attacker.applyDamage(EVENT.damageAtker);
    }
    if (EVENT.effectAtker) {
      applyEffectData(attacker, EVENT.effectAtker);
    }
  }
}

/**
 * Define a weapon attack skill without trigger.
 * Please use {@link WeaponAtkSkill} or {@link WeaponUseSkill}.
 * @deprecated
 */
export class WeaponSkill {
  /**
   * @param weight The probability to triggered when multiple skills are added to a weapon.
   * @param event This event fires when the skill is triggered.
   * @param actionBarTips Tips on action bar when this skill is triggered.
   * @param durability The amount of durability consumed when unleashing this skill.
   */
  constructor(
    public weight: number,
    public event: WeaponSkillEvent | "empty",
    public actionBarTips?: RawMessage,
    public durability?: number,
  ) {}
  /**
   * Unleash the weapon skill.
   * @param attacker
   * @param target
   */
  unleash(attacker: Entity, target?: Entity) {
    if (this.event === "empty") {
      return;
    }
    WeaponSkillUtils.unleash(this, attacker);
    if (this.event.custom) {
      this.event.custom(attacker);
    }
  }
  /**
   * Get the skill`s type.
   * @return Type to the skill, such as `"none"`, `"attack"` or `"use"`.
   */
  getSkillType(): WeaponSkillType {
    return "none";
  }
}

/**
 * @deprecated
 */
export class WeaponAtkSkill extends WeaponSkill {
  /**
   * @param weight The probability to triggered when multiple skills are added to a weapon.
   * @param event This event fires when the skill is triggered.
   * @param actionBarTips Tips on action bar when this skill is triggered.
   * @param durability The amount of durability consumed when unleashing this skill.
   */
  constructor(
    public weight: number,
    public event: WeaponSkillAtkEvent | "empty",
    public actionBarTips?: RawMessage,
    public durability?: number,
  ) {
    super(weight, event, actionBarTips, durability);
  }
  /**
   * Unleash the weapon skill.
   * @param attacker
   * @param target
   */
  unleash(attacker: Entity, target: Entity) {
    if (this.event === "empty") {
      return;
    }
    const EVENT = this.event;
    WeaponSkillUtils.unleash(this, attacker);
    if (this.event.custom) {
      this.event.custom(attacker, target);
    }
    if (EVENT.damageTarget) {
      target.applyDamage(EVENT.damageTarget);
    }
    if (EVENT.effectTarget) {
      applyEffectData(target, EVENT.effectTarget);
    }
  }
  /**
   * Get the skill`s type.
   * @return Type to the skill, such as `"none"`, `"attack"` or `"use"`.
   */
  getSkillType(): WeaponSkillType {
    return "attack";
  }
}

/**
 * @deprecated 
 */
export class WeaponUseSkill extends WeaponSkill {
  /**
   * @param weight The probability to triggered when multiple skills are added to a weapon.
   * @param event This event fires when the skill is triggered.
   * @param actionBarTips Tips on action bar when this skill is triggered.
   * @param durability The amount of durability consumed when unleashing this skill.
   */
  constructor(
    public weight: number,
    public event: WeaponSkillEvent | "empty",
    public actionBarTips?: RawMessage,
    public durability?: number,
  ) {
    super(weight, event, actionBarTips, durability);
  }
  /**
   * Get the skill`s type.
   * @return Type to the skill, such as `"none"`, `"attack"` or `"use"`.
   */
  getSkillType(): WeaponSkillType {
    return "use";
  }
}
