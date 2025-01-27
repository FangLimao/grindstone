[**@grindstone/effect-kit v0.1.0**](../README.md)

***

[@grindstone/effect-kit](../globals.md) / VirtualEffect

# Class: VirtualEffect

Defined in: core.ts:14

Simulate an effect *(like poison)* that has been added to an Entity.

## Constructors

### new VirtualEffect()

> **new VirtualEffect**(`id`, `maxLevel`, `triggerTick`): [`VirtualEffect`](VirtualEffect.md)

Defined in: core.ts:33

#### Parameters

##### id

`string`

The effect's id.

##### maxLevel

`number`

The maximum level of the effect.

##### triggerTick

`number` = `1`

Interval of the effect trigger.

#### Returns

[`VirtualEffect`](VirtualEffect.md)

## Properties

### effect

> `protected` **effect**: `undefined` \| (`entity`, `level`) => `void`

Defined in: core.ts:15

***

### id

> `readonly` **id**: `string`

Defined in: core.ts:34

The effect's id.

***

### maxLevel

> **maxLevel**: `number`

Defined in: core.ts:35

The maximum level of the effect.

***

### onLevelUp

> `protected` **onLevelUp**: `undefined` \| (`entity`, `newLevel`, `oldLevel`) => `void`

Defined in: core.ts:19

***

### systemId

> `protected` **systemId**: `undefined` \| `number`

Defined in: core.ts:27

The trigger's system id.

***

### triggerTick

> `protected` **triggerTick**: `number` = `1`

Defined in: core.ts:36

Interval of the effect trigger.

## Methods

### addLevel()

> **addLevel**(`entity`, `level`): `number`

Defined in: core.ts:83

Add effect level to an entity.

#### Parameters

##### entity

`Entity`

The entity to add level.

##### level

`number` = `1`

The level amount to add, default is 1.

#### Returns

`number`

The new level.

***

### addLevelTemporarily()

> **addLevelTemporarily**(`entity`, `level`, `tick`): `void`

Defined in: core.ts:109

Add effect level to an entity temporarily, it will be restored after a certain time.

#### Parameters

##### entity

`Entity`

The entity to add level.

##### level

`number` = `1`

The level amount to add, default is 1.

##### tick

`number` = `20`

How long it takes to get back to the original level, default is 20.

#### Returns

`void`

***

### getDynamicPropertyToken()

> **getDynamicPropertyToken**(): `string`

Defined in: core.ts:42

Get effect's dynamic property id.

#### Returns

`string`

***

### getLevel()

> **getLevel**(`entity`): `number`

Defined in: core.ts:66

Get an entity's effect level.

#### Parameters

##### entity

`Entity`

#### Returns

`number`

The entity's effect level.

***

### setEffect()

> **setEffect**(`effect`): `void`

Defined in: core.ts:122

Set the trigger effect.

#### Parameters

##### effect

(`entity`, `level`) => `void`

#### Returns

`void`

***

### setLevel()

> **setLevel**(`entity`, `level`): `void`

Defined in: core.ts:51

Set an entity's effect level.

#### Parameters

##### entity

`Entity`

The entity to set level.

##### level

`number` = `0`

The level.

#### Returns

`void`

#### Throws

RangeError when level > maxLevel

***

### setLevelUp()

> **setLevelUp**(`event`): `void`

Defined in: core.ts:136

Set the event when entity's level have changed.

#### Parameters

##### event

(`entity`, `newLevel`, `oldLevel`) => `void`

#### Returns

`void`

***

### startTrigger()

> **startTrigger**(): `void`

Defined in: core.ts:161

Start trigger.

#### Returns

`void`

***

### stopTrigger()

> **stopTrigger**(): `void`

Defined in: core.ts:170

Stop trigger.

#### Returns

`void`

***

### trigger()

> `protected` **trigger**(): `void`

Defined in: core.ts:141

#### Returns

`void`
