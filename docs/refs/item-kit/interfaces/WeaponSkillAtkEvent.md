[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponSkillAtkEvent

# Interface: WeaponSkillAtkEvent

Defined in: lib/weaponSkill.ts:51

This event fires when the [WeaponAtkSkill](../classes/WeaponAtkSkill.md) is unleashed.

## Extends

- [`WeaponSkillEvent`](WeaponSkillEvent.md)

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

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`custom`](WeaponSkillEvent.md#custom)

***

### damageAtker?

> `optional` **damageAtker**: `number`

Defined in: lib/weaponSkill.ts:23

Apply damage to attacker.

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`damageAtker`](WeaponSkillEvent.md#damageatker)

***

### damageTarget?

> `optional` **damageTarget**: `number`

Defined in: lib/weaponSkill.ts:55

Apply damage to target.

***

### effectAtker?

> `optional` **effectAtker**: `EffectData` \| `EffectData`[]

Defined in: lib/weaponSkill.ts:27

Apply effect(s) to attacker.

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`effectAtker`](WeaponSkillEvent.md#effectatker)

***

### effectTarget?

> `optional` **effectTarget**: `EffectData` \| `EffectData`[]

Defined in: lib/weaponSkill.ts:59

Apply effect(s) to target.

***

### levels?

> `optional` **levels**: `number`

Defined in: lib/weaponSkill.ts:35

Add levels to attacker.

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`levels`](WeaponSkillEvent.md#levels)

***

### rangeEffect?

> `optional` **rangeEffect**: [`RangeEffectOptions`](RangeEffectOptions.md)

Defined in: lib/weaponSkill.ts:31

Apply effect to some entity.

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`rangeEffect`](WeaponSkillEvent.md#rangeeffect)

***

### xp?

> `optional` **xp**: `number`

Defined in: lib/weaponSkill.ts:39

Add experiences to attacker.

#### Inherited from

[`WeaponSkillEvent`](WeaponSkillEvent.md).[`xp`](WeaponSkillEvent.md#xp)
