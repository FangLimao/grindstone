[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestBoardBuilder

# Class: QuestBoardBuilder

Defined in: main/QuestBoardBuilder.ts:9

## Constructors

### new QuestBoardBuilder()

> **new QuestBoardBuilder**(`id`, `title`, `body`, `books`, `displayCondition`): [`QuestBoardBuilder`](QuestBoardBuilder.md)

Defined in: main/QuestBoardBuilder.ts:17

#### Parameters

##### id

`string`

The unique id of the board.

##### title

Title of the board.

`string` | `RawMessage`

##### body

Body of the board.

`string` | `RawMessage`

##### books

([`QuestBookCategory`](QuestBookCategory.md) \| [`QuestBookBuilder`](QuestBookBuilder.md))[]

Books of the board.

##### displayCondition

`DisplayCondition`

Control when collection is displayed.

#### Returns

[`QuestBoardBuilder`](QuestBoardBuilder.md)

## Properties

### body

> `protected` **body**: `string` \| `RawMessage`

Defined in: main/QuestBoardBuilder.ts:20

Body of the board.

***

### books

> **books**: ([`QuestBookCategory`](QuestBookCategory.md) \| [`QuestBookBuilder`](QuestBookBuilder.md))[]

Defined in: main/QuestBoardBuilder.ts:21

Books of the board.

***

### displayCondition

> **displayCondition**: `DisplayCondition`

Defined in: main/QuestBoardBuilder.ts:22

Control when collection is displayed.

***

### id

> `readonly` **id**: `string`

Defined in: main/QuestBoardBuilder.ts:18

The unique id of the board.

***

### title

> `protected` **title**: `string` \| `RawMessage`

Defined in: main/QuestBoardBuilder.ts:19

Title of the board.

## Methods

### build()

> **build**(): `void`

Defined in: main/QuestBoardBuilder.ts:43

Build this quest book.

#### Returns

`void`

***

### display()

> **display**(`player`): `void`

Defined in: main/QuestBoardBuilder.ts:28

Display the board form to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`
