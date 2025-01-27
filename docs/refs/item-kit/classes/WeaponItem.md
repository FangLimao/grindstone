[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponItem

# Class: WeaponItem

Defined in: lib/weapon.ts:115

Define a tool.

## Extends

- [`Weapon`](Weapon.md)

## Constructors

### new WeaponItem()

> **new WeaponItem**(`typeId`, `options`?): [`WeaponItem`](WeaponItem.md)

Defined in: lib/weapon.ts:124

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack.
If a namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

##### options?

[`WeaponOptions`](../interfaces/WeaponOptions.md)

Additional options of the weapon.

#### Returns

[`WeaponItem`](WeaponItem.md)

#### Overrides

[`Weapon`](Weapon.md).[`constructor`](Weapon.md#constructors)

## Properties

### options?

> `optional` **options**: [`WeaponOptions`](../interfaces/WeaponOptions.md)

Defined in: lib/weapon.ts:126

Additional options of the weapon.

#### Inherited from

[`Weapon`](Weapon.md).[`options`](Weapon.md#options-1)

***

### token

> **token**: `string`

Defined in: lib/weapon.ts:17

The weapon token.

#### Inherited from

[`Weapon`](Weapon.md).[`token`](Weapon.md#token-1)

***

### typeId

> **typeId**: `string`

Defined in: lib/weapon.ts:125

Identifier of the type of items for the stack.
If a namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

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

Defined in: lib/weapon.ts:130

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
