import { Entity, Player, RawMessage } from "@minecraft/server";

/**
 * Define a boss skill.
 */
export class BossSkill {
  /**
   * @param id Boss skill`s id.
   * @param cooldownTime Cooldown time of the boss skill.
   * @param radius The radius within which entity can be effected by the skill.
   * @param effect This event fires when the skill is triggered.
   * @param message Message to send when the skill is unleashed.
   */
  constructor(
    public id: string,
    public cooldownTime: number,
    public radius: number,
    public effect: SkillEffect,
    public message?: string | RawMessage
  ) {}
  /**
   * Unleash the skill to an entity.
   * @param entity
   * @param boss
   */
  unleash(entity: Entity, boss?: Entity) {
    const skillEffect = this.effect;
    if (entity instanceof Player) {
      if (this.message) entity.sendMessage(this.message);
      if (skillEffect.exp) entity.addExperience(skillEffect.exp);
      if (skillEffect.level) entity.addLevels(skillEffect.level);
    }
    if (skillEffect.damage) entity.applyDamage(skillEffect.damage);
    if (skillEffect.event) {
      skillEffect.event(entity, boss);
    }
  }
  /**
   * Unleash the skill to entities.
   * @param entities Entities to unleash.
   * @param boss The boss itself.
   */
  unleashArray(entities: Entity[], boss?: Entity) {
    for (const [index, entity] of entities.entries()) {
      if (index === 0) {
        this.unleash(entity, boss);
      } else {
        this.unleash(entity);
      }
    }
  }
}

/**
 * Unleash effect of boss skill.
 */
export interface SkillEffect {
  /**
   * The trigger effect when skill unleash.
   */
  event?: (entity: Entity, boss?: Entity) => void;
  /**
   * Add exp when skill unleash.
   */
  exp?: number;
  /**
   * Add level when skill unleash.
   */
  level?: number;
  /**
   * Apply damage when skill unleash.
   */
  damage?: number;
}
