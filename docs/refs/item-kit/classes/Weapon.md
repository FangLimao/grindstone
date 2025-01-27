[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / Weapon

# Class: `abstract` Weapon

Defined in: lib/weapon.ts:10

The abstract weapon.

## Extended by

- [`WeaponTag`](WeaponTag.md)
- [`WeaponItem`](WeaponItem.md)

## Constructors

### new Weapon()

> **new Weapon**(`token`, `options`?): [`Weapon`](Weapon.md)

Defined in: lib/weapon.ts:16

#### Parameters

##### token

`string`

The weapon token.

##### options?

[`WeaponOptions`](../interfaces/WeaponOptions.md)

Additional options of the weapon.

#### Returns

[`Weapon`](Weapon.md)

## Properties

### options?

> `optional` **options**: [`WeaponOptions`](../interfaces/WeaponOptions.md)

Defined in: lib/weapon.ts:18

Additional options of the weapon.

***

### token

> **token**: `string`

Defined in: lib/weapon.ts:17

The weapon token.

## Methods

### build()

> **build**(): `void`

Defined in: lib/weapon.ts:87

Build the weapon.

#### Returns

`void`

***

### getAtkSkills()

> **getAtkSkills**(): [`WeaponAtkSkill`](WeaponAtkSkill.md)[]

Defined in: lib/weapon.ts:34

Get this weapon's attack skill.

#### Returns

[`WeaponAtkSkill`](WeaponAtkSkill.md)[]

***

### getSkills()

> **getSkills**(): `undefined` \| [`WeaponSkill`](WeaponSkill.md)[]

Defined in: lib/weapon.ts:28

Get this weapon`s all skills.

#### Returns

`undefined` \| [`WeaponSkill`](WeaponSkill.md)[]

***

### getUseSkills()

> **getUseSkills**(): [`WeaponUseSkill`](WeaponUseSkill.md)[]

Defined in: lib/weapon.ts:46

Get this weapon's use skill.

#### Returns

[`WeaponUseSkill`](WeaponUseSkill.md)[]

***

### identify()

> `abstract` **identify**(`item`): `boolean`

Defined in: lib/weapon.ts:24

Identify the item.

#### Parameters

##### item

`ItemStack`

#### Returns

`boolean`

***

### trigger()

> **trigger**(): `void`

Defined in: lib/weapon.ts:58

Automatically consume durability for the weapon.

#### Returns

`void`
