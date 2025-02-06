import { Skill } from "./common";

/**
 * 武器攻击技能，将会在武器材料使用时被释放
 */
export class WeaponAtkSkill extends Skill {
  /**
   * @param weight 若多个技能同时可释放，该技能被选中释放的概率
   * @param durability 消耗武器材料的耐久值，默认为1
   * @param ignoreOtherSkills 若多个技能同时可释放，是否忽略其他技能直接释放
   */
  constructor(
    public weight: number,
    public durability: number = 1,
    public ignoreOtherSkills: boolean = false
  ) {
    super(weight, ignoreOtherSkills);
  }
  getSkillType(): WeaponSkillType {
    return "attack";
  }
}

/**
 * 武器使用技能，将会在武器材料使用时被释放
 */
export class WeaponUseSkill extends Skill {
    /**
     * @param weight 若多个技能同时可释放，该技能被选中释放的概率
     * @param durability 消耗武器材料的耐久值，默认为1
     * @param ignoreOtherSkills 若多个技能同时可释放，是否忽略其他技能直接释放
     */
    constructor(
      public weight: number,
      public durability: number = 1,
      public ignoreOtherSkills: boolean = false
    ) {
      super(weight, ignoreOtherSkills);
    }
    getSkillType(): WeaponSkillType {
      return "use";
    }
  }

/**
 * 武器技能的类型
 */
export type WeaponSkillType = "attack" | "use";
