[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponSkillEvent

# Interface: WeaponSkillEvent

Defined in: lib/weaponSkill.ts:19

This event fires when the [WeaponSkill](../classes/WeaponSkill.md) is unleashed.

## Extended by

- [`WeaponSkillAtkEvent`](WeaponSkillAtkEvent.md)

## Properties

### custom()?

> `optional` **custom**: (`attacker`, `target`?) => `void`

Defined in: lib/weaponSkill.ts:45

This custom event fires when the [WeaponSkill](../classes/WeaponSkill.md) is unleashed.

#### Parameters

##### attacker

`Entity`

The attacker.

##### target?

`Entity`

The target, might be undefined.

#### Returns

`void`

***

### damageAtker?

> `optional` **damageAtker**: `number`

Defined in: lib/weaponSkill.ts:23

Apply damage to attacker.

***

### effectAtker?

> `optional` **effectAtker**: `EffectData` \| `EffectData`[]

Defined in: lib/weaponSkill.ts:27

Apply effect(s) to attacker.

***

### levels?

> `optional` **levels**: `number`

Defined in: lib/weaponSkill.ts:35

Add levels to attacker.

***

### rangeEffect?

> `optional` **rangeEffect**: [`RangeEffectOptions`](RangeEffectOptions.md)

Defined in: lib/weaponSkill.ts:31

Apply effect to some entity.

***

### xp?

> `optional` **xp**: `number`

Defined in: lib/weaponSkill.ts:39

Add experiences to attacker.
