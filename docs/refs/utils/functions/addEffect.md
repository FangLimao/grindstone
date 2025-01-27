[**@grindstone/utils v0.7.2**](../README.md)

***

[@grindstone/utils](../globals.md) / addEffect

# Function: addEffect()

> **addEffect**(`entity`, `effectType`, `duration`, `options`?): `void`

Defined in: entity.ts:81

Wrapper function for adding effect(s) or effect group.

## Parameters

### entity

`Entity`

The entity to add effect.

### effectType

the effect(s) to add, use [EffectGroups](../enumerations/EffectGroups.md) to add group effects.

`string` | `string`[] | `EffectType` | `EffectType`[] | [`EffectGroups`](../enumerations/EffectGroups.md)

### duration

`number`

Amount of time, in ticks, for the effect to apply.
There are 20 ticks per second. Use TicksPerSecond constant to convert between ticks and seconds.
The value must be within he range [0, 20000000].

### options?

`EntityEffectOptions`

Additional options for the effect.

## Returns

`void`

## Throws

This function can throw errors.
