/**
 * 生成随机整数
 * @param max 最大值，小数部分将被解析为整数
 * @param min 最小值，小数部分将被解析为整数，默认为0
 * @param inclusive 生成的随机数是否包含最小值和最大值，默认为true
 * @return 在最小值和最大值之间的一个随机整数
 * @throws 如果 max < min，则抛出 RangeError
 * @category Stable
 * @since 1.0.0
 */
export function randomInteger(
  max: number,
  min: number = 0,
  inclusive: boolean = true
): number {
  max = Math.ceil(max);
  min = Math.ceil(min);
  if (max < min) {
    throw new RangeError(
      `randomInteger() is used incorrectly! Expect: any number higher than ${min}. Current: ${max}`
    );
  }
  if (inclusive) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

/**
 * 生成随机小数
 * @param max 最大值，小数部分将被解析为整数
 * @param min 最小值，小数部分将被解析为整数，默认为0
 * @param fixed 保留的小数位数。默认为2
 * @param inclusive 生成的随机数是否包含最小值和最大值，默认为true
 * @return 在最小值和最大值之间的一个随机小数
 * @throws 如果 max < min，则抛出 RangeError
 * @category Stable
 * @since 1.0.0
 */
export function randomDecimal(
  max: number,
  min: number = 0,
  fixed: number = 2,
  inclusive: boolean = true
): number {
  max = Math.ceil(max);
  min = Math.ceil(min);
  if (max < min) {
    throw new RangeError(
      `randomDecimal() is used incorrectly! Expect: any number higher than ${min}. Current: ${max}`
    );
  }
  let random: number;
  if (inclusive) {
    random = Math.random() * (max - min + 1) + min;
  } else {
    random = Math.random() * (max - min) + min;
  }
  if (fixed) {
    return Number(random.toFixed(fixed));
  } else {
    return random;
  }
}

/**
 * 检查数字是否为百分数
 * @param num 要检查的数字
 * @return 如果数字是百分比，则返回`true`，否则返回`false`
 * @category Stable
 * @since 1.0.0
 */
export function checkPercent(num: number): boolean {
  return !(num > 1 || num < 0);
}