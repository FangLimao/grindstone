import { Entity, EntityDieAfterEvent, Player, world } from "@minecraft/server";
import { BossSkill } from "./bossSkill";
import { EntityUtils } from "../utils";

/**
 * Define a boss entity.
 * @category Need Registry
 * @beta
 */
export class Boss {
  /**
   * @param typeId Identifier of the type of the entity.
   * @param skills The {@link BossSkill} the boss own.
   * @param music The music to play when boss is spawned.
   * @param dieEvent Trigger event when the boss die.
   */
  constructor(
    public typeId: string,
    public skills: BossSkill[],
    public music?: BossMusicOptions,
    public dieEvent?: (arg: EntityDieAfterEvent) => void
  ) {}
  /**
   * Play the boss music to player(s).
   * @param player
   */
  playMusic(player: Player | Player[]): void {
    if (Array.isArray(player)) {
      player.forEach((pl) => {
        if (this.music) pl.playMusic(this.music.trackId, { loop: true });
      });
    } else if (this.music) {
      player.playMusic(this.music.trackId, { loop: true });
    }
  }
  /**
   * Unleash all the skills.
   * @param entity
   * @param boss
   */
  unleashSkill(entity: Entity, boss: Entity): void {
    this.skills.forEach((skill) => {
      skill.unleash(entity, boss);
    });
  }
  /**
   * Build the boss.
   */
  build():void{
    world.afterEvents.entitySpawn.subscribe((event) => {
      const ENTITY = event.entity;
      EntityUtils.registriesBoss(this, ENTITY);
    });
    world.afterEvents.entityLoad.subscribe((event) => {
      const ENTITY = event.entity;
      EntityUtils.registriesBoss(this, ENTITY);
    });
  }
}

/**
 * Options of boss music.
 */
export interface BossMusicOptions {
  /**
   * Identifier of the music track to play.
   */
  trackId: string;
  /**
   * The radius within which player can hear the music.
   */
  radius: number;
}
