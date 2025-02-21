[@grindstone/common](../globals.md) / EffectData

# Interface: EffectData

Defined in: components/grindstone-common/src/lib/kit.ts:28

状态效果数据

## Since

1.0.0

## Properties

### amplifier?

> `optional` **amplifier**: `number`

Defined in: components/grindstone-common/src/lib/kit.ts:42

状态效果等级

***

### duration

> **duration**: `number`

Defined in: components/grindstone-common/src/lib/kit.ts:38

状态效果持续时间，以刻为单位 *（20刻=1秒）*

其值必须在范围`[0, 20000000]`内

***

### effectType

> **effectType**: `string` \| `EffectType`

Defined in: components/grindstone-common/src/lib/kit.ts:32

状态效果类型

***

### showParticles?

> `optional` **showParticles**: `boolean`

Defined in: components/grindstone-common/src/lib/kit.ts:46

是否展示状态效果粒子
