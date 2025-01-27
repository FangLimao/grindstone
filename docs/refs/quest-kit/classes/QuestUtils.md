[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestUtils

# Class: QuestUtils

Defined in: lib/utils.ts:15

Some useful function for quest kit.

## Constructors

### new QuestUtils()

> **new QuestUtils**(): [`QuestUtils`](QuestUtils.md)

#### Returns

[`QuestUtils`](QuestUtils.md)

## Methods

### checkCondition()

> `static` **checkCondition**(`quest`, `player`): `boolean`

Defined in: lib/utils.ts:142

Check if a player is up to the condition.

#### Parameters

##### quest

[`Quest`](Quest.md)

##### player

`Player`

#### Returns

`boolean`

***

### generateQuestBody()

> `static` **generateQuestBody**(`description`, `data`): `RawMessage`

Defined in: lib/utils.ts:44

Generate a quest body, including condition and award.

#### Parameters

##### description

Description of the quest.

`string` | `RawMessage`

##### data

[`QuestOptions`](../interfaces/QuestOptions.md)

Data of the quest.

#### Returns

`RawMessage`

The generated quest body.

***

### registriesDisplay()

> `static` **registriesDisplay**(`item`): `void`

Defined in: lib/utils.ts:20

Registried quest board's display.

#### Parameters

##### item

[`QuestBoardBuilder`](QuestBoardBuilder.md)

#### Returns

`void`
