[@grindstone/article-kit](../globals.md) / BaseArticle

# Class: `abstract` BaseArticle

Defined in: core.ts:34

基础的文章类

## Since

1.0.0

## Extended by

- [`Article`](Article.md)
- [`ArticleCenter`](ArticleCenter.md)

## Constructors

### new BaseArticle()

> **new BaseArticle**(`id`, `title`, `body`, `data`): [`BaseArticle`](BaseArticle.md)

Defined in: core.ts:35

#### Parameters

##### id

`string`

##### title

[`ArticleText`](../type-aliases/ArticleText.md)

##### body

[`ArticleText`](../type-aliases/ArticleText.md)

##### data

`any`

#### Returns

[`BaseArticle`](BaseArticle.md)

## Properties

### body

> **body**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:38

***

### data

> **data**: `any`

Defined in: core.ts:39

***

### id

> `readonly` **id**: `string`

Defined in: core.ts:36

***

### title

> **title**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:37

## Methods

### display()

> `abstract` **display**(`player`, `backTo`?): `void`

Defined in: core.ts:41

#### Parameters

##### player

`Player`

##### backTo?

[`BaseArticle`](BaseArticle.md)

#### Returns

`void`

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
