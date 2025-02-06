import { world, ItemStack, Entity } from "@minecraft/server";
import { getEquipmentItem } from "@grindstone/utils";
import { WeaponSkill, WeaponUseSkill } from "./weaponSkill";
import { WeaponUtils } from "../utils";
import { WeaponAtkSkill } from "./weaponSkill";

/**
 * 武器抽象类
 * @deprecated 请使用`MaterialKit.WeaponMaterial`替代此类
 */
export abstract class Weapon {
  /**
   * @param token The weapon token.
   * @param options Additional options of the weapon.
   * @param durabilitySettings
   */
  constructor(
    public token: string,
    public options?: WeaponOptions
  ) {}
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
        if (this.options?.closeDurabilityTrigger) return;
        WeaponUtils.onDurabilityDisposeTrigger(PLAYER, ITEM, this, 2);
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
 * 定义一个武器标签
 * 
 * @deprecated 请使用`MaterialKit.WeaponMaterial`替代此类
 */
export class WeaponTag extends Weapon {
  /**
   * @param tag The weapon tag.
   * @param options Additional options of the weapon.
   * @param durabilitySettings
   */
  constructor(
    public tag: string,
    public options?: WeaponOptions
  ) {
    super(tag, options);
  }
  identify(item: ItemStack): boolean {
    return item.hasTag(this.tag);
  }
}

/**
 * 定义一个工具物品
 * 
 * @deprecated 请使用`MaterialKit.WeaponMaterial`替代此类
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
    public options?: WeaponOptions
  ) {
    super(typeId, options);
  }
  identify(item: ItemStack): boolean {
    return item.typeId === this.typeId;
  }
}

/**
 * 工具类型
 * @deprecated `MaterialKit.WeaponMaterial`已经替代此类型所属的类
 */
export type WeaponType = "sword" | "custom";

/**
 * @deprecated
 */
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
  closeDurabilityTrigger?: boolean;
}
