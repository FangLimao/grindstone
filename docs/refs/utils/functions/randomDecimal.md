[@grindstone/utils](../globals.md) / randomDecimal

# Function: randomDecimal()

> **randomDecimal**(`max`, `min`, `fixed`, `inclusive`): `number`

Defined in: math.ts:41

生成随机小数

## Parameters

### max

`number`

最大值，小数部分将被解析为整数

### min

`number` = `0`

最小值，小数部分将被解析为整数，默认为0

### fixed

`number` = `2`

保留的小数位数。默认为2

### inclusive

`boolean` = `true`

生成的随机数是否包含最小值和最大值，默认为true

## Returns

`number`

在最小值和最大值之间的一个随机小数

## Throws

如果 max < min，则抛出 RangeError

## Since

1.0.0
