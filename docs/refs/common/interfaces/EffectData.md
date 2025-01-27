[**@grindstone/common v0.4.0**](../README.md)

***

[@grindstone/common](../globals.md) / EffectData

# Interface: EffectData

Defined in: components/grindstone-common/src/lib/kit.ts:24

Effect data.

## Properties

### amplifier?

> `optional` **amplifier**: `number`

Defined in: components/grindstone-common/src/lib/kit.ts:38

The strength of the effect.

***

### duration

> **duration**: `number`

Defined in: components/grindstone-common/src/lib/kit.ts:34

Amount of time, in ticks, for the effect to apply.
There are 20 ticks per second. Use TicksPerSecond constant to convert between ticks and seconds.
The value must be within he range [0, 20000000].

***

### effectType

> **effectType**: `string` \| `EffectType`

Defined in: components/grindstone-common/src/lib/kit.ts:28

Type of effect to add to the entity.

***

### showParticles?

> `optional` **showParticles**: `boolean`

Defined in: components/grindstone-common/src/lib/kit.ts:42

If true, will show particles when effect is on the entity.
