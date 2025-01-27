[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / Quest

# Class: Quest

Defined in: main/Quest.ts:14

Create a Quest.

## Constructors

### new Quest()

> **new Quest**(`id`, `_title`, `_body`, `options`): [`Quest`](Quest.md)

Defined in: main/Quest.ts:23

#### Parameters

##### id

`string`

The unique id of the quest.

##### \_title

Title of the quest.

`string` | `RawMessage`

##### \_body

Body of the quest.

`string` | `RawMessage`

##### options

[`QuestOptions`](../interfaces/QuestOptions.md)

Options of the quest.

#### Returns

[`Quest`](Quest.md)

## Properties

### \_body

> `protected` **\_body**: `string` \| `RawMessage`

Defined in: main/Quest.ts:26

Body of the quest.

***

### \_title

> `protected` **\_title**: `string` \| `RawMessage`

Defined in: main/Quest.ts:25

Title of the quest.

***

### form

> `protected` **form**: `MessageFormData`

Defined in: main/Quest.ts:15

***

### id

> `readonly` **id**: `string`

Defined in: main/Quest.ts:24

The unique id of the quest.

***

### options

> **options**: [`QuestOptions`](../interfaces/QuestOptions.md)

Defined in: main/Quest.ts:27

Options of the quest.

## Accessors

### body

#### Get Signature

> **get** **body**(): `string` \| `RawMessage`

Defined in: main/Quest.ts:103

##### Returns

`string` \| `RawMessage`

#### Set Signature

> **set** **body**(`content`): `void`

Defined in: main/Quest.ts:95

##### Parameters

###### content

`string` | `RawMessage`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string` \| `RawMessage`

Defined in: main/Quest.ts:106

##### Returns

`string` \| `RawMessage`

#### Set Signature

> **set** **title**(`content`): `void`

Defined in: main/Quest.ts:99

##### Parameters

###### content

`string` | `RawMessage`

##### Returns

`void`

## Methods

### complete()

> **complete**(`player`): `void`

Defined in: main/Quest.ts:75

Let a player complete the quest and give award.

#### Parameters

##### player

`Player`

#### Returns

`void`

***

### display()

> **display**(`player`, `backTo`?): `void`

Defined in: main/Quest.ts:45

Show form to a player.

#### Parameters

##### player

`Player`

##### backTo?

[`QuestBookBuilder`](QuestBookBuilder.md)

The screen player should return to after closing the form.

#### Returns

`void`

***

### isCompleted()

> **isCompleted**(`player`): `boolean`

Defined in: main/Quest.ts:92

Check if a player has completed this quest.

#### Parameters

##### player

`Player`

#### Returns

`boolean`
