[**@grindstone/entity-kit v0.2.0**](../README.md)

***

[@grindstone/entity-kit](../globals.md) / Boss

# Class: Boss

Defined in: lib/boss.ts:10

**`Beta`**

Define a boss entity.

## Constructors

### new Boss()

> **new Boss**(`typeId`, `skills`, `music`?, `dieEvent`?): [`Boss`](Boss.md)

Defined in: lib/boss.ts:17

**`Beta`**

#### Parameters

##### typeId

`string`

Identifier of the type of the entity.

##### skills

[`BossSkill`](BossSkill.md)[]

The [BossSkill](BossSkill.md) the boss own.

##### music?

[`BossMusicOptions`](../interfaces/BossMusicOptions.md)

The music to play when boss is spawned.

##### dieEvent?

(`arg`) => `void`

Trigger event when the boss die.

#### Returns

[`Boss`](Boss.md)

## Properties

### dieEvent()?

> `optional` **dieEvent**: (`arg`) => `void`

Defined in: lib/boss.ts:21

**`Beta`**

Trigger event when the boss die.

#### Parameters

##### arg

`EntityDieAfterEvent`

#### Returns

`void`

***

### music?

> `optional` **music**: [`BossMusicOptions`](../interfaces/BossMusicOptions.md)

Defined in: lib/boss.ts:20

**`Beta`**

The music to play when boss is spawned.

***

### skills

> **skills**: [`BossSkill`](BossSkill.md)[]

Defined in: lib/boss.ts:19

**`Beta`**

The [BossSkill](BossSkill.md) the boss own.

***

### typeId

> **typeId**: `string`

Defined in: lib/boss.ts:18

**`Beta`**

Identifier of the type of the entity.

## Methods

### build()

> **build**(): `void`

Defined in: lib/boss.ts:49

**`Beta`**

#### Returns

`void`

***

### playMusic()

> **playMusic**(`player`): `void`

Defined in: lib/boss.ts:27

**`Beta`**

#### Parameters

##### player

`Player` | `Player`[]

#### Returns

`void`

***

### unleashSkill()

> **unleashSkill**(`entity`, `boss`): `void`

Defined in: lib/boss.ts:41

**`Beta`**

#### Parameters

##### entity

`Entity`

##### boss

`Entity`

#### Returns

`void`
