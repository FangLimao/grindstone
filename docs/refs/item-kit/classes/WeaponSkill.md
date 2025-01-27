[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponSkill

# Class: WeaponSkill

Defined in: lib/weaponSkill.ts:112

Define a weapon attack skill without trigger.
Please use [WeaponAtkSkill](WeaponAtkSkill.md) or [WeaponUseSkill](WeaponUseSkill.md).

## Extended by

- [`WeaponAtkSkill`](WeaponAtkSkill.md)
- [`WeaponUseSkill`](WeaponUseSkill.md)

## Constructors

### new WeaponSkill()

> **new WeaponSkill**(`weight`, `event`, `actionBarTips`?, `durability`?): [`WeaponSkill`](WeaponSkill.md)

Defined in: lib/weaponSkill.ts:119

#### Parameters

##### weight

`number`

The probability to triggered when multiple skills are added to a weapon.

##### event

This event fires when the skill is triggered.

`"empty"` | [`WeaponSkillEvent`](../interfaces/WeaponSkillEvent.md)

##### actionBarTips?

`RawMessage`

Tips on action bar when this skill is triggered.

##### durability?

`number`

The amount of durability consumed when unleashing this skill.

#### Returns

[`WeaponSkill`](WeaponSkill.md)

## Properties

### actionBarTips?

> `optional` **actionBarTips**: `RawMessage`

Defined in: lib/weaponSkill.ts:122

Tips on action bar when this skill is triggered.

***

### durability?

> `optional` **durability**: `number`

Defined in: lib/weaponSkill.ts:123

The amount of durability consumed when unleashing this skill.

***

### event

> **event**: `"empty"` \| [`WeaponSkillEvent`](../interfaces/WeaponSkillEvent.md)

Defined in: lib/weaponSkill.ts:121

This event fires when the skill is triggered.

***

### weight

> **weight**: `number`

Defined in: lib/weaponSkill.ts:120

The probability to triggered when multiple skills are added to a weapon.

## Methods

### getSkillType()

> **getSkillType**(): [`WeaponSkillType`](../type-aliases/WeaponSkillType.md)

Defined in: lib/weaponSkill.ts:143

Get the skill`s type.
@return Type to the skill, such as `"none"`, `"attack"` or `"use"`.

#### Returns

[`WeaponSkillType`](../type-aliases/WeaponSkillType.md)

***

### unleash()

> **unleash**(`attacker`, `target`?): `void`

Defined in: lib/weaponSkill.ts:130

Unleash the weapon skill.

#### Parameters

##### attacker

`Entity`

##### target?

`Entity`

#### Returns

`void`
