[**@grindstone/entity-kit v0.2.0**](../README.md)

***

[@grindstone/entity-kit](../globals.md) / SkillEffect

# Interface: SkillEffect

Defined in: lib/bossSkill.ts:57

Unleash effect of boss skill.

## Properties

### damage?

> `optional` **damage**: `number`

Defined in: lib/bossSkill.ts:73

Apply damage when skill unleash.

***

### event()?

> `optional` **event**: (`entity`, `boss`?) => `void`

Defined in: lib/bossSkill.ts:61

The trigger effect when skill unleash.

#### Parameters

##### entity

`Entity`

##### boss?

`Entity`

#### Returns

`void`

***

### exp?

> `optional` **exp**: `number`

Defined in: lib/bossSkill.ts:65

Add exp when skill unleash.

***

### level?

> `optional` **level**: `number`

Defined in: lib/bossSkill.ts:69

Add level when skill unleash.
