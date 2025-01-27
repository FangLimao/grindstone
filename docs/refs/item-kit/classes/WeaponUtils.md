[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponUtils

# Class: WeaponUtils

Defined in: utils.ts:82

Some useful functions for Weapon Api.

## Constructors

### new WeaponUtils()

> **new WeaponUtils**(): [`WeaponUtils`](WeaponUtils.md)

#### Returns

[`WeaponUtils`](WeaponUtils.md)

## Methods

### onDurabilityDisposeTrigger()

> `static` **onDurabilityDisposeTrigger**(`holder`, `item`, `weapon`, `durability`): `void`

Defined in: utils.ts:121

#### Parameters

##### holder

`Entity`

##### item

`ItemStack`

##### weapon

[`Weapon`](Weapon.md)

##### durability

`number`

#### Returns

`void`

***

### onHitTrigger()

> `static` **onHitTrigger**(`weapon`, `hitter`, `target`): `void`

Defined in: utils.ts:100

#### Parameters

##### weapon

[`Weapon`](Weapon.md) | [`WeaponTag`](WeaponTag.md) | [`WeaponItem`](WeaponItem.md)

##### hitter

`Entity`

##### target

`Entity`

#### Returns

`void`

***

### onUseTrigger()

> `static` **onUseTrigger**(`weapon`, `player`): `void`

Defined in: utils.ts:83

#### Parameters

##### weapon

[`Weapon`](Weapon.md) | [`WeaponTag`](WeaponTag.md) | [`WeaponItem`](WeaponItem.md)

##### player

`Player`

#### Returns

`void`
