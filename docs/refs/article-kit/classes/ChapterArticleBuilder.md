[**@grindstone/article-kit v0.2.0**](../README.md)

***

[@grindstone/article-kit](../globals.md) / ChapterArticleBuilder

# Class: ChapterArticleBuilder

Defined in: builder.ts:98

Create an article with chapters.

## Extends

- [`ArticleBuilder`](ArticleBuilder.md)

## Constructors

### new ChapterArticleBuilder()

> **new ChapterArticleBuilder**(`id`, `title`, `body`, `chapters`, `iconPath`?, `needUnlock`?): [`ChapterArticleBuilder`](ChapterArticleBuilder.md)

Defined in: builder.ts:107

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

##### chapters

[`ChapterData`](../interfaces/ChapterData.md)[]

Chapters of the article.

##### iconPath?

`string`

Icon path of the article.

##### needUnlock?

`boolean` = `true`

If true, articles will be unlocked in the [ArticleCollectionBuilder](ArticleCollectionBuilder.md) after reading it.

#### Returns

[`ChapterArticleBuilder`](ChapterArticleBuilder.md)

#### Overrides

[`ArticleBuilder`](ArticleBuilder.md).[`constructor`](ArticleBuilder.md#constructors)

## Properties

### body

> **body**: `string` \| `RawMessage`

Defined in: builder.ts:110

Body of the article, support RawMessage.

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`body`](ArticleBuilder.md#body-1)

***

### chapters

> **chapters**: [`ChapterData`](../interfaces/ChapterData.md)[]

Defined in: builder.ts:111

Chapters of the article.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: builder.ts:112

Icon path of the article.

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`iconPath`](ArticleBuilder.md#iconpath-1)

***

### id

> `readonly` **id**: `string`

Defined in: builder.ts:108

Article's id.

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`id`](ArticleBuilder.md#id-1)

***

### needUnlock

> **needUnlock**: `boolean` = `true`

Defined in: builder.ts:113

If true, articles will be unlocked in the [ArticleCollectionBuilder](ArticleCollectionBuilder.md) after reading it.

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`needUnlock`](ArticleBuilder.md#needunlock-1)

***

### title

> **title**: `string` \| `RawMessage`

Defined in: builder.ts:109

Title of the article.

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`title`](ArticleBuilder.md#title-1)

## Methods

### build()

> **build**(): `void`

Defined in: builder.ts:85

Build the article.

#### Returns

`void`

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`build`](ArticleBuilder.md#build)

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

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`checkUnlock`](ArticleBuilder.md#checkunlock)

***

### display()

> **display**(`player`): `void`

Defined in: builder.ts:120

Display the reading to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`

#### Overrides

[`ArticleBuilder`](ArticleBuilder.md).[`display`](ArticleBuilder.md#display)

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

#### Inherited from

[`ArticleBuilder`](ArticleBuilder.md).[`unlock`](ArticleBuilder.md#unlock)
