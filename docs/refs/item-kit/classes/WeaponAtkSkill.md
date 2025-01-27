[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponAtkSkill

# Class: WeaponAtkSkill

Defined in: lib/weaponSkill.ts:148

Define a weapon attack skill without trigger.
Please use [WeaponAtkSkill](WeaponAtkSkill.md) or [WeaponUseSkill](WeaponUseSkill.md).

## Extends

- [`WeaponSkill`](WeaponSkill.md)

## Constructors

### new WeaponAtkSkill()

> **new WeaponAtkSkill**(`weight`, `event`, `actionBarTips`?, `durability`?): [`WeaponAtkSkill`](WeaponAtkSkill.md)

Defined in: lib/weaponSkill.ts:155

#### Parameters

##### weight

`number`

The probability to triggered when multiple skills are added to a weapon.

##### event

This event fires when the skill is triggered.

`"empty"` | [`WeaponSkillAtkEvent`](../interfaces/WeaponSkillAtkEvent.md)

##### actionBarTips?

`RawMessage`

Tips on action bar when this skill is triggered.

##### durability?

`number`

The amount of durability consumed when unleashing this skill.

#### Returns

[`WeaponAtkSkill`](WeaponAtkSkill.md)

#### Overrides

[`WeaponSkill`](WeaponSkill.md).[`constructor`](WeaponSkill.md#constructors)

## Properties

### actionBarTips?

> `optional` **actionBarTips**: `RawMessage`

Defined in: lib/weaponSkill.ts:158

Tips on action bar when this skill is triggered.

#### Inherited from

[`WeaponSkill`](WeaponSkill.md).[`actionBarTips`](WeaponSkill.md#actionbartips-1)

***

### durability?

> `optional` **durability**: `number`

Defined in: lib/weaponSkill.ts:159

The amount of durability consumed when unleashing this skill.

#### Inherited from

[`WeaponSkill`](WeaponSkill.md).[`durability`](WeaponSkill.md#durability-1)

***

### event

> **event**: `"empty"` \| [`WeaponSkillAtkEvent`](../interfaces/WeaponSkillAtkEvent.md)

Defined in: lib/weaponSkill.ts:157

This event fires when the skill is triggered.

#### Inherited from

[`WeaponSkill`](WeaponSkill.md).[`event`](WeaponSkill.md#event-1)

***

### weight

> **weight**: `number`

Defined in: lib/weaponSkill.ts:156

The probability to triggered when multiple skills are added to a weapon.

#### Inherited from

[`WeaponSkill`](WeaponSkill.md).[`weight`](WeaponSkill.md#weight-1)

## Methods

### getSkillType()

> **getSkillType**(): [`WeaponSkillType`](../type-aliases/WeaponSkillType.md)

Defined in: lib/weaponSkill.ts:188

Get the skill`s type.
@return Type to the skill, such as `"none"`, `"attack"` or `"use"`.

#### Returns

[`WeaponSkillType`](../type-aliases/WeaponSkillType.md)

#### Overrides

[`WeaponSkill`](WeaponSkill.md).[`getSkillType`](WeaponSkill.md#getskilltype)

***

### unleash()

> **unleash**(`attacker`, `target`): `void`

Defined in: lib/weaponSkill.ts:168

Unleash the weapon skill.

#### Parameters

##### attacker

`Entity`

##### target

`Entity`

#### Returns

`void`

#### Overrides

[`WeaponSkill`](WeaponSkill.md).[`unleash`](WeaponSkill.md#unleash)
