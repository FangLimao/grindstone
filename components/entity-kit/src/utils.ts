import { Entity, Player, world, system } from "@minecraft/server";
import { Boss } from "./lib/boss";

export class EntityUtils {
  static registriesBossMusic(boss: Boss, entity: Entity) {
    if (entity.typeId === boss.typeId && boss.music) {
      const MUSIC = boss.music;
      const players: Player[] = [];

      entity.dimension
        .getEntities({
          location: entity.location,
          minDistance: 0,
          maxDistance: MUSIC.radius,
        })
        .forEach((entity) => {
          if (entity instanceof Player) {
            entity.playMusic(MUSIC.trackId, { loop: true });
            players.push(entity);
          }
        });

      world.afterEvents.entityDie.subscribe((event) => {
        if (event.deadEntity.id === entity.id) {
          players.forEach((player) => {
            player.stopMusic();
          });
        }
      });
      world.afterEvents.entityRemove.subscribe((event) => {
        if (event.removedEntityId === entity.id) {
          players.forEach((player) => {
            player.stopMusic();
          });
        }
      });
    }
  }
  static registriesBoss(boss: Boss, entity: Entity) {
    EntityUtils.registriesBossMusic(boss, entity);
    if (
      entity.typeId === boss.typeId &&
      !entity.getDynamicProperty("grindstone:start_skill")
    ) {
      entity.setDynamicProperty("grindstone:start_skill", true);
      boss.skills.forEach((skill) => {
        let handle = system.runInterval(() => {
          skill.unleashArray(
            entity.dimension.getEntities({
              location: entity.location,
              minDistance: 0,
              maxDistance: skill.radius,
              excludeTypes: [entity.typeId]
            }),
            entity
          );
        }, skill.cooldownTime);
        world.afterEvents.entityDie.subscribe((event) => {
          if (event.deadEntity.id === entity.id) {
            system.clearRun(handle);
          }
        });
        world.afterEvents.entityRemove.subscribe((event) => {
          if (event.removedEntityId === entity.id) {
            system.clearRun(handle);
          }
        });
      });
    }
  }
  static registriesBossDeadEvent(boss: Boss) {
    world.afterEvents.entityDie.subscribe((event) => {
      if (event.deadEntity.typeId === boss.typeId) {
        if(!boss.dieEvent) return;
        boss.dieEvent(event);
      }
    })
  }
}
