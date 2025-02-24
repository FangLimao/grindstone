[@grindstone/effect-kit](../globals.md) / VirtualEffect

# Class: VirtualEffect

Defined in: core.ts:29

模拟一个可以添加到实体上的状态效果

## Since

1.0.0

## Constructors

### new VirtualEffect()

> **new VirtualEffect**(`id`, `updateTick`, `type`?): [`VirtualEffect`](VirtualEffect.md)

Defined in: core.ts:45

#### Parameters

##### id

`string`

状态效果的 ID

##### updateTick

`number` = `1`

设置状态效果更新的间隔，推荐设置的大一些以避免游戏卡顿

##### type?

[`VirtualEffectType`](../enumerations/VirtualEffectType.md)

状态效果的类型（正面、负面、中性）

#### Returns

[`VirtualEffect`](VirtualEffect.md)

## Properties

### id

> `readonly` **id**: `string`

Defined in: core.ts:46

状态效果的 ID

***

### type?

> `protected` `optional` **type**: [`VirtualEffectType`](../enumerations/VirtualEffectType.md)

Defined in: core.ts:48

状态效果的类型（正面、负面、中性）

***

### updateTick

> `protected` **updateTick**: `number` = `1`

Defined in: core.ts:47

设置状态效果更新的间隔，推荐设置的大一些以避免游戏卡顿

## Methods

### add()

> **add**(`entity`, `duration`, `amplifier`): `boolean`

Defined in: core.ts:57

向实体添加该状态效果

#### Parameters

##### entity

`Entity`

要添加状态效果的实体

##### duration

`number`

效果持续时间，以刻为单位 *（20刻=1秒）*

##### amplifier

`number` = `0`

效果的等级（0为代表1级）

#### Returns

`boolean`

本次添加操作是否成功

***

### getAmplifier()

> **getAmplifier**(`entity`): `undefined` \| `number`

Defined in: core.ts:127

获取该状态效果的等级

#### Parameters

##### entity

`Entity`

#### Returns

`undefined` \| `number`

实体的状态效果等级

***

### onAddToEntity()

> **onAddToEntity**(`event`): `void`

Defined in: core.ts:105

Set the event when entity's level have changed.

#### Parameters

##### event

(`entity`, `amplifier`) => `void`

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(`event`): `void`

Defined in: core.ts:98

当状态效果更新时，触发的事件

#### Parameters

##### event

(`entity`, `amplifier`) => `void`

#### Returns

`void`

***

### remove()

> **remove**(`entity`): `boolean`

Defined in: core.ts:85

向实体移除该状态效果

#### Parameters

##### entity

`Entity`

要移除效果的实体

#### Returns

`boolean`

本次移除操作是否成功

#### Throws

如果 Runner ID 数据类型不是 number 或 undefined，则抛出错误
