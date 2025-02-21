[@grindstone/utils](../globals.md) / addEffect

# Function: addEffect()

> **addEffect**(`entity`, `effectType`, `duration`, `options`?): `void`

Defined in: entity.ts:80

向实体添加状态效果

## Parameters

### entity

`Entity`

要添加状态效果实体对象

### effectType

状态效果类型，可以是单个效果类型、效果类型数组、字符串、字符串数组或[EffectGroups](../enumerations/EffectGroups.md)枚举值

`string` | `string`[] | `EffectType` | `EffectType`[] | [`EffectGroups`](../enumerations/EffectGroups.md)

### duration

`number`

状态效果持续时间，以刻为单位 *（20刻=1秒）*

其值必须在范围`[0, 20000000]`内

### options?

`EntityEffectOptions`

状态效果选项

## Returns

`void`

## Since

1.0.0
