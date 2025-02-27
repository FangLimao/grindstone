[@grindstone/article-kit](../globals.md) / Article

# Class: Article

Defined in: core.ts:99

创建一个文章

## Since

1.0.0

## Extends

- [`BaseArticle`](BaseArticle.md)

## Constructors

### new Article()

> **new Article**(`id`, `title`, `body`, `chapters`?, `iconPath`?, `needUnlock`?): [`Article`](Article.md)

Defined in: core.ts:108

#### Parameters

##### id

`string`

文章ID

##### title

[`ArticleText`](../type-aliases/ArticleText.md)

文章标题

##### body

[`ArticleText`](../type-aliases/ArticleText.md)

文章内容，支持字符串、RawMessage 和动态生成

##### chapters?

[`ChapterData`](../interfaces/ChapterData.md)[]

文章的章节

##### iconPath?

`string`

文章的图标路径

##### needUnlock?

`boolean` = `true`

是否需要解锁

#### Returns

[`Article`](Article.md)

#### Overrides

[`BaseArticle`](BaseArticle.md).[`constructor`](BaseArticle.md#constructors)

## Properties

### body

> **body**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:111

文章内容，支持字符串、RawMessage 和动态生成

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`body`](BaseArticle.md#body-1)

***

### chapters?

> `optional` **chapters**: [`ChapterData`](../interfaces/ChapterData.md)[]

Defined in: core.ts:112

文章的章节

***

### data

> **data**: `any`

Defined in: core.ts:39

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`data`](BaseArticle.md#data-1)

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: core.ts:113

文章的图标路径

***

### id

> `readonly` **id**: `string`

Defined in: core.ts:109

文章ID

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`id`](BaseArticle.md#id-1)

***

### needUnlock

> **needUnlock**: `boolean` = `true`

Defined in: core.ts:114

是否需要解锁

***

### title

> **title**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:110

文章标题

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`title`](BaseArticle.md#title-1)

## Methods

### checkUnlock()

> **checkUnlock**(`player`): `boolean`

Defined in: core.ts:205

检查文章是否在文章中心里解锁

#### Parameters

##### player

`Player`

#### Returns

`boolean`

***

### display()

> **display**(`player`, `backTo`?): `void`

Defined in: core.ts:187

向玩家展示文章

#### Parameters

##### player

`Player`

要展示文章的玩家

##### backTo?

[`BaseArticle`](BaseArticle.md)

关闭文章后返回的界面

#### Returns

`void`

#### Overrides

[`BaseArticle`](BaseArticle.md).[`display`](BaseArticle.md#display)

***

### registryComponent()

> **registryComponent**(`componentName`): `void`

Defined in: core.ts:64

将该文章注册为自定义物品组件

#### Parameters

##### componentName

`string`

自定义组件名称

#### Returns

`void`

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`registryComponent`](BaseArticle.md#registrycomponent)

***

### subscribeEvent()

> **subscribeEvent**(`typeId`): `void`

Defined in: core.ts:53

注册文章事件

#### Parameters

##### typeId

`string`

文章的物品ID

#### Returns

`void`

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`subscribeEvent`](BaseArticle.md#subscribeevent)

***

### unlock()

> **unlock**(`player`): `void`

Defined in: core.ts:198

在文章中心里解锁文章

#### Parameters

##### player

`Player`

#### Returns

`void`
