[@grindstone/utils](../globals.md) / affectEntities

# Function: affectEntities()

> **affectEntities**(`dimension`, `affectOption`, `effectType`, `duration`, `effectOption`?): `void`

Defined in: entity.ts:259

对指定维度中的实体施加效果

## Parameters

### dimension

`Dimension`

实体所处的维度

### affectOption

`EntityQueryOptions`

实体查询选项

### effectType

状态效果类型

`string` | `EffectType`

### duration

`number`

效果持续时间，以刻为单位 *（20刻=1秒）*

其值必须在范围`[0, 20000000]`内

### effectOption?

`EntityEffectOptions`

实体效果选项

## Returns

`void`

## Since

1.0.0
