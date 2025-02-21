import { Block, Dimension, Vector3 } from "@minecraft/server";

/**
 * 在给定的范围内查找指定类型的方块
 * @param blockId 要查找的方块ID
 * @param location 查找的起始位置
 * @param dimension 查找的维度
 * @param radius 查找的半径
 * @category Stable
 * @since 1.0.0
 */
export function findBlocks(
  blockId: string,
  location: Vector3,
  dimension: Dimension,
  radius: number,
): Block[] {
  let blocks: Block[] = [];
  for (let x = location.x - radius; x <= location.x + radius; x++) {
    for (let y = location.y - radius; y <= location.y + radius; y++) {
      for (let z = location.z - radius; z <= location.z + radius; z++) {
        const block: undefined | Block = dimension.getBlock({
          x: x,
          y: y,
          z: z,
        });
        if (block?.typeId === blockId) {
          blocks.push(block);
        }
      }
    }
  }
  return blocks;
}
