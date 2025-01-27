[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeaponOptions

# Interface: WeaponOptions

Defined in: lib/weapon.ts:140

## Properties

### closeDurabilityTrigger?

> `optional` **closeDurabilityTrigger**: `boolean`

Defined in: lib/weapon.ts:153

***

### destroyedAfterEvents()?

> `optional` **destroyedAfterEvents**: (`holder`, `item`) => `void`

Defined in: lib/weapon.ts:152

Trigger events when the tool has been destroyed.

#### Parameters

##### holder

`Entity`

##### item

`ItemStack`

#### Returns

`void`

***

### skill?

> `optional` **skill**: [`WeaponSkill`](../classes/WeaponSkill.md)[]

Defined in: lib/weapon.ts:148

Weapon`s skill.

***

### type?

> `optional` **type**: [`WeaponType`](../type-aliases/WeaponType.md)

Defined in: lib/weapon.ts:144

Type of the tool.
