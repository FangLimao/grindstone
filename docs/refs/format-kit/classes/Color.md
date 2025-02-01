[**@grindstone/format-kit v0.1.0**](../README.md)

***

[@grindstone/format-kit](../globals.md) / Color

# Class: Color

Defined in: index.ts:17

快速给文本添加颜色的工具，灵感来自于 LeviLamina - LegacyScriptEngine

## Examples

```ts
world.getAllPlayers().forEach((player) => {
player.sendMessage(Color.black + "将文本设置为黑色！");
});
```

```ts
world.getAllPlayers().forEach((player) => {
player.sendMessage({
  // 将本地化字符串设置为黑色！
  rawtext: [{ text: Color.black }, { translate: "example.translate_string" }],
});
});
```

## Properties

### aqua

> `static` **aqua**: `string` = `"§b"`

Defined in: index.ts:66

将文本颜色设置为天蓝色

***

### black

> `static` **black**: `string` = `"§0"`

Defined in: index.ts:22

将文本颜色设置为黑色

***

### blue

> `static` **blue**: `string` = `"§9"`

Defined in: index.ts:58

将文本颜色设置为蓝色

***

### darkAqua

> `static` **darkAqua**: `string` = `"§3"`

Defined in: index.ts:34

将文本颜色设置为湖蓝色

***

### darkBlue

> `static` **darkBlue**: `string` = `"§1"`

Defined in: index.ts:26

将文本颜色设置为深蓝色

***

### darkGray

> `static` **darkGray**: `string` = `"§8"`

Defined in: index.ts:54

将文本颜色设置为深灰色

***

### darkGreen

> `static` **darkGreen**: `string` = `"§2"`

Defined in: index.ts:30

将文本颜色设置为深绿色

***

### darkPurple

> `static` **darkPurple**: `string` = `"§5"`

Defined in: index.ts:42

将文本颜色设置为深紫色

***

### darkRed

> `static` **darkRed**: `string` = `"§4"`

Defined in: index.ts:38

将文本颜色设置为深红色

***

### gold

> `static` **gold**: `string` = `"§6"`

Defined in: index.ts:46

将文本颜色设置为金色

***

### gray

> `static` **gray**: `string` = `"§7"`

Defined in: index.ts:50

将文本颜色设置为灰色

***

### green

> `static` **green**: `string` = `"§a"`

Defined in: index.ts:62

将文本颜色设置为绿色

***

### lightPurple

> `static` **lightPurple**: `string` = `"§d"`

Defined in: index.ts:74

将文本颜色设置为浅紫色

***

### minecoinGold

> `static` **minecoinGold**: `string` = `"§g"`

Defined in: index.ts:86

将文本颜色设置为硬币金色

***

### red

> `static` **red**: `string` = `"§c"`

Defined in: index.ts:70

将文本颜色设置为红色

***

### white

> `static` **white**: `string` = `"§f"`

Defined in: index.ts:82

将文本颜色设置为白色

***

### yellow

> `static` **yellow**: `string` = `"§e"`

Defined in: index.ts:78

将文本颜色设置为黄色
