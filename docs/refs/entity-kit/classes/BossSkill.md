[**@grindstone/entity-kit v0.2.0**](../README.md)

***

[@grindstone/entity-kit](../globals.md) / BossSkill

# Class: BossSkill

Defined in: lib/bossSkill.ts:6

Define a boss skill.

## Constructors

### new BossSkill()

> **new BossSkill**(`id`, `cooldownTime`, `radius`, `effect`, `message`?): [`BossSkill`](BossSkill.md)

Defined in: lib/bossSkill.ts:14

#### Parameters

##### id

`string`

Boss skill`s id.

##### cooldownTime

`number`

Cooldown time of the boss skill.

##### radius

`number`

The radius within which entity can be effected by the skill.

##### effect

[`SkillEffect`](../interfaces/SkillEffect.md)

This event fires when the skill is triggered.

##### message?

Message to send when the skill is unleashed.

`string` | `RawMessage`

#### Returns

[`BossSkill`](BossSkill.md)

## Properties

### cooldownTime

> **cooldownTime**: `number`

Defined in: lib/bossSkill.ts:16

Cooldown time of the boss skill.

***

### effect

> **effect**: [`SkillEffect`](../interfaces/SkillEffect.md)

Defined in: lib/bossSkill.ts:18

This event fires when the skill is triggered.

***

### id

> **id**: `string`

Defined in: lib/bossSkill.ts:15

Boss skill`s id.

***

### message?

> `optional` **message**: `string` \| `RawMessage`

Defined in: lib/bossSkill.ts:19

Message to send when the skill is unleashed.

***

### radius

> **radius**: `number`

Defined in: lib/bossSkill.ts:17

The radius within which entity can be effected by the skill.

## Methods

### unleash()

> **unleash**(`entity`, `boss`?): `void`

Defined in: lib/bossSkill.ts:26

Unleash the skill to an entity.

#### Parameters

##### entity

`Entity`

##### boss?

`Entity`

#### Returns

`void`

***

### unleashArray()

> **unleashArray**(`entities`, `boss`?): `void`

Defined in: lib/bossSkill.ts:43

Unleash the skill to entities.

#### Parameters

##### entities

`Entity`[]

Entities to unleash.

##### boss?

`Entity`

The boss itself.

#### Returns

`void`
