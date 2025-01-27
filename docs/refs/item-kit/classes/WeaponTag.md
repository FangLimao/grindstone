[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponTag

# Class: WeaponTag

Defined in: lib/weapon.ts:95

Define a tool tag.

## Extends

- [`Weapon`](Weapon.md)

## Constructors

### new WeaponTag()

> **new WeaponTag**(`tag`, `options`?): [`WeaponTag`](WeaponTag.md)

Defined in: lib/weapon.ts:101

#### Parameters

##### tag

`string`

The weapon tag.

##### options?

[`WeaponOptions`](../interfaces/WeaponOptions.md)

Additional options of the weapon.

#### Returns

[`WeaponTag`](WeaponTag.md)

#### Overrides

[`Weapon`](Weapon.md).[`constructor`](Weapon.md#constructors)

## Properties

### options?

> `optional` **options**: [`WeaponOptions`](../interfaces/WeaponOptions.md)

Defined in: lib/weapon.ts:103

Additional options of the weapon.

#### Inherited from

[`Weapon`](Weapon.md).[`options`](Weapon.md#options-1)

***

### tag

> **tag**: `string`

Defined in: lib/weapon.ts:102

The weapon tag.

***

### token

> **token**: `string`

Defined in: lib/weapon.ts:17

The weapon token.

#### Inherited from

[`Weapon`](Weapon.md).[`token`](Weapon.md#token-1)

## Methods

### build()

> **build**(): `void`

Defined in: lib/weapon.ts:87

Build the weapon.

#### Returns

`void`

#### Inherited from

[`Weapon`](Weapon.md).[`build`](Weapon.md#build)

***

### getAtkSkills()

> **getAtkSkills**(): [`WeaponAtkSkill`](WeaponAtkSkill.md)[]

Defined in: lib/weapon.ts:34

Get this weapon's attack skill.

#### Returns

[`WeaponAtkSkill`](WeaponAtkSkill.md)[]

#### Inherited from

[`Weapon`](Weapon.md).[`getAtkSkills`](Weapon.md#getatkskills)

***

### getSkills()

> **getSkills**(): `undefined` \| [`WeaponSkill`](WeaponSkill.md)[]

Defined in: lib/weapon.ts:28

Get this weapon`s all skills.

#### Returns

`undefined` \| [`WeaponSkill`](WeaponSkill.md)[]

#### Inherited from

[`Weapon`](Weapon.md).[`getSkills`](Weapon.md#getskills)

***

### getUseSkills()

> **getUseSkills**(): [`WeaponUseSkill`](WeaponUseSkill.md)[]

Defined in: lib/weapon.ts:46

Get this weapon's use skill.

#### Returns

[`WeaponUseSkill`](WeaponUseSkill.md)[]

#### Inherited from

[`Weapon`](Weapon.md).[`getUseSkills`](Weapon.md#getuseskills)

***

### identify()

> **identify**(`item`): `boolean`

Defined in: lib/weapon.ts:107

Identify the item.

#### Parameters

##### item

`ItemStack`

#### Returns

`boolean`

#### Overrides

[`Weapon`](Weapon.md).[`identify`](Weapon.md#identify)

***

### trigger()

> **trigger**(): `void`

Defined in: lib/weapon.ts:58

Automatically consume durability for the weapon.

#### Returns

`void`

#### Inherited from

[`Weapon`](Weapon.md).[`trigger`](Weapon.md#trigger)
