import { system } from "@minecraft/server";

/**
 * 生成一个UUID
 * @return 一个UUID
 * @category Stable
 * @since 1.0.0
 */
export function generateUUID(): string {
  const currentTimestamp: number = system.currentTick;
  return "xxxxxxxx-xxxx-4xxx-yxxx-zxxxxxxx".replace(
    /[xyz]/g,
    (args: string) => {
      const random: number = (Math.random() * 16) | 0;
      const value: number = args == "x" ? random : (random & 0x3) | 0x8;
      if (args === "z")
        return value.toString(16) + currentTimestamp.toString(16).slice(-4);
      else return value.toString(16);
    },
  );
}

/**
 * 确保给定字符串包含命名空间
 * @param str 要检查的字符串
 * @return 包含命名空间的字符串，如果没有命名空间将会添加`minecraft:`命名空间
 * @category Stable
 * @since 1.0.0
 */
export function ensureNamespace(str: string): string {
  return str.includes(":") ? str : "minecraft:" + str;
}

/**
 * 以升序对数字数组进行排序
 * @param arr 要排序的数组
 * @category Stable
 * @since 1.0.0
 */
export function ascendingSort(arr: Array<number>): void{
  arr.sort(function (a, b) {
    return a - b;
  });
}

/**
 * 以降序对数字数组进行排序
 * @param arr 要排序的数组
 * @category Stable
 * @since 1.0.0
 */
export function descendingSort (arr: Array<number>): void{
  arr.sort(function (a, b) {
    return b - a;
  });
}

