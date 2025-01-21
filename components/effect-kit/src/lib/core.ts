import { Dimension, Entity, system, world } from "@minecraft/server";
/**
 * All vanilla dimensions.
 */
export const vanillaDimensions: Dimension[] = [
  world.getDimension("minecraft:overworld"),
  world.getDimension("minecraft:nether"),
  world.getDimension("minecraft:the_end"),
];

/**
 * Simulate an effect *(like poison)* that has been added to an Entity.
 */
export class VirtualEffect {
  protected effect: ((entity: Entity, level: number) => void) | undefined;
  /**
   * 
   */
  protected onLevelUp: ((
    entity: Entity,
    newLevel: number,
    oldLevel: number
  ) => void) | undefined;
  /**
   * The trigger's system id.
   */
  protected systemId: number | undefined;
  /**
   * @param id The effect's id.
   * @param maxLevel The maximum level of the effect.
   * @param triggerTick Interval of the effect trigger.
   */
  constructor(
    readonly id: string,
    public maxLevel: number,
    protected triggerTick: number = 1
  ) {}
  /**
   * Get effect's dynamic property id.
   * @returns 
   */
  getDynamicPropertyToken(): string {
    return this.id + ":level";
  }
  /**
   * Set an entity's effect level.
   * @param entity The entity to set level.
   * @param level The level.
   * @throws RangeError when level > maxLevel
   */
  setLevel(entity: Entity, level: number = 0): void {
    if (!level) level = 0;
    if (level > this.maxLevel) {
      throw new RangeError(
        "The level to set is bigger than max level! The max level is:" +
          this.maxLevel
      );
    }
    entity.setDynamicProperty(this.getDynamicPropertyToken(), level);
  }
  /**
   * Get an entity's effect level.
   * @param entity 
   * @returns The entity's effect level.
   */
  getLevel(entity: Entity): number {
    const level = entity.getDynamicProperty(this.getDynamicPropertyToken());
    if (!level) {
      this.setLevel(entity, 0);
      return 0;
    }
    if (typeof level !== "number") {
      throw new Error();
    }
    return level;
  }
  /**
   * Add effect level to an entity. 
   * @param entity The entity to add level.
   * @param level The level amount to add, default is 1.
   * @returns The new level.
   */
  addLevel(entity: Entity, level: number = 1): number {
    const oldLevel = this.getLevel(entity);
    let newLevel = 0;
    if (oldLevel + level > this.maxLevel) {
      this.setLevel(entity, this.maxLevel);
      if (this.onLevelUp) {
        this.onLevelUp(entity, oldLevel, newLevel);
        console.log(this.onLevelUp.toString());
      }
      return this.maxLevel;
    }
    newLevel = oldLevel + level;
    this.setLevel(entity, newLevel);
    if (this.onLevelUp) {
      this.onLevelUp(entity, oldLevel, newLevel);
      console.log(this.onLevelUp.toString());
    }
    return newLevel;
  }
  /**
   * 
   * Add effect level to an entity temporarily, it will be restored after a certain time.
   * @param entity The entity to add level.
   * @param level The level amount to add, default is 1.
   * @param tick How long it takes to get back to the original level, default is 20.
   */
  addLevelTemporarily(entity: Entity, level: number = 1, tick: number = 20): void {
    const oldLevel = this.getLevel(entity);
    this.addLevel(entity, level);
    system.runTimeout(() => {
      if (entity.isValid()) {
        this.setLevel(entity, oldLevel);
      }
    }, tick);
  }
  /**
   * Set the trigger effect.
   * @param effect 
   */
  setEffect(effect: (entity: Entity, level: number) => void) {
    this.effect = effect;
    if (this.systemId) {
      system.clearRun(this.systemId);
      let num = system.runInterval(() => {
        this.trigger;
      }, this.triggerTick);
      this.systemId = num;
    }
  }
  /**
   * Set the event when entity's level have changed.
   * @param event 
   */
  setLevelUp(
    event: (entity: Entity, newLevel: number, oldLevel: number) => void
  ) {
    this.onLevelUp = event;
  }
  protected trigger() {
    system.runInterval(() => {
      vanillaDimensions.forEach((dimension) => {
        dimension.getEntities().forEach((entity) => {
          const level = this.getLevel(entity);
          if (level > 0 && this.effect) {
            this.effect(entity, level);
          }
        });
      });
    }, this.triggerTick);
    world.afterEvents.playerSpawn.subscribe((arg) => {
      if (!arg.initialSpawn) {
        this.setLevel(arg.player);
      }
    });
  }
  /**
   * Start trigger.
   */
  startTrigger() {
    let num = system.runInterval(() => {
      this.trigger();
    }, this.triggerTick);
    this.systemId = num;
  }
  /**
   * Stop trigger.
   */
  stopTrigger() {
    if (this.systemId) system.clearRun(this.systemId);
  }
}
