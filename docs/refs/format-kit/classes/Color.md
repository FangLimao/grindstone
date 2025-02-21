[@grindstone/format-kit](../globals.md) / Color

# Class: Color

Defined in: index.ts:18

快速给文本添加颜色的工具，灵感来自于 LeviLamina - LegacyScriptEngine

## Since

1.0.0

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

Defined in: index.ts:67

将文本颜色设置为天蓝色

***

### black

> `static` **black**: `string` = `"§0"`

Defined in: index.ts:23

将文本颜色设置为黑色

***

### blue

> `static` **blue**: `string` = `"§9"`

Defined in: index.ts:59

将文本颜色设置为蓝色

***

### darkAqua

> `static` **darkAqua**: `string` = `"§3"`

Defined in: index.ts:35

将文本颜色设置为湖蓝色

***

### darkBlue

> `static` **darkBlue**: `string` = `"§1"`

Defined in: index.ts:27

将文本颜色设置为深蓝色

***

### darkGray

> `static` **darkGray**: `string` = `"§8"`

Defined in: index.ts:55

将文本颜色设置为深灰色

***

### darkGreen

> `static` **darkGreen**: `string` = `"§2"`

Defined in: index.ts:31

将文本颜色设置为深绿色

***

### darkPurple

> `static` **darkPurple**: `string` = `"§5"`

Defined in: index.ts:43

将文本颜色设置为深紫色

***

### darkRed

> `static` **darkRed**: `string` = `"§4"`

Defined in: index.ts:39

将文本颜色设置为深红色

***

### gold

> `static` **gold**: `string` = `"§6"`

Defined in: index.ts:47

将文本颜色设置为金色

***

### gray

> `static` **gray**: `string` = `"§7"`

Defined in: index.ts:51

将文本颜色设置为灰色

***

### green

> `static` **green**: `string` = `"§a"`

Defined in: index.ts:63

将文本颜色设置为绿色

***

### lightPurple

> `static` **lightPurple**: `string` = `"§d"`

Defined in: index.ts:75

将文本颜色设置为浅紫色

***

### materialAmethyst

> `static` **materialAmethyst**: `string` = `"§u"`

Defined in: index.ts:129

将文本颜色设置为水晶紫色

***

### materialCopper

> `static` **materialCopper**: `string` = `"§n"`

Defined in: index.ts:109

将文本颜色设置为铜橙色

***

### materialDiamond

> `static` **materialDiamond**: `string` = `"§s"`

Defined in: index.ts:121

将文本颜色设置为钻石色

***

### materialEmerald

> `static` **materialEmerald**: `string` = `"§q"`

Defined in: index.ts:117

将文本颜色设置为绿宝石色

***

### materialGold

> `static` **materialGold**: `string` = `"§p"`

Defined in: index.ts:113

将文本颜色设置为金色

***

### materialIron

> `static` **materialIron**: `string` = `"§i"`

Defined in: index.ts:97

将文本颜色设置为铁灰色

***

### materialLapis

> `static` **materialLapis**: `string` = `"§t"`

Defined in: index.ts:125

将文本颜色设置为青金石色

***

### materialNetherite

> `static` **materialNetherite**: `string` = `"§j"`

Defined in: index.ts:101

将文本颜色设置为下界合金灰色

***

### materialQuartz

> `static` **materialQuartz**: `string` = `"§h"`

Defined in: index.ts:93

将文本颜色设置为石英色

***

### materialRedstone

> `static` **materialRedstone**: `string` = `"§m"`

Defined in: index.ts:105

将文本颜色设置为红石色

***

### materialResin

> `static` **materialResin**: `string` = `"§v"`

Defined in: index.ts:133

将文本颜色设置为树脂橙色

***

### minecoinGold

> `static` **minecoinGold**: `string` = `"§g"`

Defined in: index.ts:89

将文本颜色设置为硬币金色

该颜色在PlayStation上无法正常显示，会显示为无格式或透明。

***

### red

> `static` **red**: `string` = `"§c"`

Defined in: index.ts:71

将文本颜色设置为红色

***

### white

> `static` **white**: `string` = `"§f"`

Defined in: index.ts:83

将文本颜色设置为白色

***

### yellow

> `static` **yellow**: `string` = `"§e"`

Defined in: index.ts:79

将文本颜色设置为黄色
