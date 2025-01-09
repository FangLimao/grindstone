import { world, ItemStack, Entity } from "@minecraft/server";
import { getEquipmentItem } from "@grindstone/utils";
import { WeaponSkill, WeaponUseSkill } from "./weaponSkill";
import { WeaponUtils } from "../utils";
import { WeaponAtkSkill } from "./weaponSkill";

/**
 * The abstract weapon.
 */
export abstract class Weapon {
  /**
   * @param token The weapon token.
   * @param options Additional options of the weapon.
   * @param durabilitySettings
   */
  constructor(
    public token: string,
    public options?: WeaponOptions,
    public durabilitySettings?: WeaponDurabilitySettings
  ) {
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 2;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 1;
      }
    }
  }
  /**
   * Identify the item.
   * @param item
   */
  abstract identify(item: ItemStack): boolean;
  /**
   * Get this weapon`s all skills.
   */
  getSkills(): WeaponSkill[] | undefined {
    return this.options?.skill;
  }
  /**
   * Get this weapon's attack skill.
   */
  getAtkSkills(): WeaponAtkSkill[] {
    let atkSkills: WeaponAtkSkill[] = [];
    this.options?.skill?.forEach((skill) => {
      if (skill.getSkillType() === "attack") {
        atkSkills.push(skill);
      }
    });
    return atkSkills;
  }
  /**
   * Get this weapon's use skill.
   */
  getUseSkills(): WeaponUseSkill[] {
    let useSkills: WeaponUseSkill[] = [];
    this.options?.skill?.forEach((skill) => {
      if (skill.getSkillType() === "use") {
        useSkills.push(skill);
      }
    });
    return useSkills;
  }
  /**
   * Automatically consume durability for the weapon.
   */
  trigger() {
    world.afterEvents.itemUse.subscribe((event) => {
      const [PLAYER, ITEM] = [event.source, event.itemStack];
      if (this.identify(ITEM)) {
        WeaponUtils.onUseTrigger(this, PLAYER);
      }
    });
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      const [PLAYER, ITEM] = [event.player, getEquipmentItem(event.player)];
      if (!ITEM) return;
      if (this.identify(ITEM)) {
        WeaponUtils.onDurabilityDisposeTrigger(PLAYER, ITEM, this);
      }
    });
    world.afterEvents.entityHitEntity.subscribe((event) => {
      const [ENTITY, ITEM] = [
        event.damagingEntity,
        getEquipmentItem(event.damagingEntity),
      ];
      if (!ITEM) return;
      if (this.identify(ITEM)) {
        WeaponUtils.onHitTrigger(this, ENTITY, event.hitEntity);
        WeaponUtils.onDurabilityDisposeTrigger(ENTITY, ITEM, this);
      }
    });
  }
  /**
   * Build the weapon.
   */
  build(): void {
    this.trigger();
  }
}

/**
 * Define a tool tag.
 */
export class WeaponTag extends Weapon {
  /**
   * @param tag The weapon tag.
   * @param options Additional options of the weapon.
   * @param durabilitySettings
   */
  constructor(
    public tag: string,
    public options?: WeaponOptions,
    public durabilitySettings?: WeaponDurabilitySettings
  ) {
    super(tag, options, durabilitySettings);
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 2;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 1;
      }
    }
  }
  identify(item: ItemStack): boolean {
    return item.hasTag(this.tag);
  }
}

/**
 * Define a tool.
 */
export class WeaponItem extends Weapon {
  /**
   * @param typeId
   * Identifier of the type of items for the stack.
   * If a namespace is not specified, 'minecraft:' is assumed.
   * Examples include 'wheat' or 'apple'.
   * @param options Additional options of the weapon.
   * @param durabilitySettings
   */
  constructor(
    public typeId: string,
    public options?: WeaponOptions,
    public durabilitySettings?: WeaponDurabilitySettings
  ) {
    super(typeId, options, durabilitySettings);
    if (this.durabilitySettings) {
      if (!this.durabilitySettings.onDiggerBlock) {
        this.durabilitySettings.onDiggerBlock = 2;
      }
      if (!this.durabilitySettings.onHitEntity) {
        this.durabilitySettings.onHitEntity = 1;
      }
    }
  }
  identify(item: ItemStack): boolean {
    return item.typeId === this.typeId;
  }
}

/**
 * Type of the weapon.
 */
export type WeaponType = "sword" | "custom";

export interface WeaponOptions {
  /**
   * Type of the tool.
   */
  type?: WeaponType;
  /**
   * Weapon`s skill.
   */
  skill?: WeaponSkill[];
  /**
   * Trigger events when the tool has been destroyed.
   */
  destroyedAfterEvents?: (holder: Entity, item: ItemStack) => void;
}

export interface WeaponDurabilitySettings {
  onDiggerBlock?: number;
  onHitEntity?: number;
}
