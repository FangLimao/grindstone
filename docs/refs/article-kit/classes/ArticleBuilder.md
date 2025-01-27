[**@grindstone/article-kit v0.2.0**](../README.md)

***

[@grindstone/article-kit](../globals.md) / ArticleBuilder

# Class: ArticleBuilder

Defined in: builder.ts:34

Create an article.

## Extended by

- [`ChapterArticleBuilder`](ChapterArticleBuilder.md)

## Constructors

### new ArticleBuilder()

> **new ArticleBuilder**(`id`, `title`, `body`, `iconPath`?, `needUnlock`?): [`ArticleBuilder`](ArticleBuilder.md)

Defined in: builder.ts:42

#### Parameters

##### id

`string`

Article's id.

##### title

Title of the article.

`string` | `RawMessage`

##### body

Body of the article, support RawMessage.

`string` | `RawMessage`

##### iconPath?

`string`

Icon path of the article.

##### needUnlock?

`boolean` = `true`

If true, articles will be unlocked in the [ArticleCollectionBuilder](ArticleCollectionBuilder.md) after reading it.

#### Returns

[`ArticleBuilder`](ArticleBuilder.md)

## Properties

### body

> **body**: `string` \| `RawMessage`

Defined in: builder.ts:45

Body of the article, support RawMessage.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: builder.ts:46

Icon path of the article.

***

### id

> `readonly` **id**: `string`

Defined in: builder.ts:43

Article's id.

***

### needUnlock

> **needUnlock**: `boolean` = `true`

Defined in: builder.ts:47

If true, articles will be unlocked in the [ArticleCollectionBuilder](ArticleCollectionBuilder.md) after reading it.

***

### title

> **title**: `string` \| `RawMessage`

Defined in: builder.ts:44

Title of the article.

## Methods

### build()

> **build**(): `void`

Defined in: builder.ts:85

Build the article.

#### Returns

`void`

***

### checkUnlock()

> **checkUnlock**(`player`): `boolean`

Defined in: builder.ts:75

Check the article whether it is unlocked or not to article collection.

#### Parameters

##### player

`Player`

#### Returns

`boolean`

***

### display()

> **display**(`player`): `void`

Defined in: builder.ts:52

Display the reading to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`

***

### unlock()

> **unlock**(`player`): `void`

Defined in: builder.ts:68

Unlock the article to article collection.

#### Parameters

##### player

`Player`

#### Returns

`void`
