# Grindstone Format Kit
这是一个提供快速格式文本功能的工具包，其使用方法类似字符串：

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

## Format
Format类提供了快速给文本添加格式的功能，可用的格式如下：

### bold

> `static` **bold**: `string` = `"§l"`

Defined in: index.ts:97

将文本格式设置为**加粗**

***

### italics

> `static` **italics**: `string` = `"§o"`

Defined in: index.ts:101

将文本格式设置为*斜体*

***

### newLine

> `static` **newLine**: `string` = `"\n"`

Defined in: index.ts:123

***

### random

> `static` **random**: `string` = `"§k"`

Defined in: index.ts:115

将文本格式设置为随机字符，在脚本表单下会显示为`.......`

***

### reset

> `static` **reset**: `string` = `"§r"`

Defined in: index.ts:119

重置所有文本颜色和格式

***

### ~~strikeThrough~~

> `static` **strikeThrough**: `string` = `"§m"`

Defined in: index.ts:111

将文本格式设置为带有删除线

由于 Mojang 自身原因，游戏中删除线文本无法正常格式化。

***

### ~~underline~~

> `static` **underline**: `string` = `"§n"`

Defined in: index.ts:106

将文本格式设置为带有下划线

由于 Mojang 自身原因，游戏中下划线文本无法正常格式化。

## Color
Color类提供了快速给文本添加颜色的功能，可用的颜色如下：


### aqua

> `static` **aqua**: `string` = `"§b"`

Defined in: index.ts:66

将文本颜色设置为天蓝色

### black

> `static` **black**: `string` = `"§0"`

Defined in: index.ts:22

将文本颜色设置为黑色

### blue

> `static` **blue**: `string` = `"§9"`

Defined in: index.ts:58

将文本颜色设置为蓝色

### darkAqua

> `static` **darkAqua**: `string` = `"§3"`

Defined in: index.ts:34

将文本颜色设置为湖蓝色

### darkBlue

> `static` **darkBlue**: `string` = `"§1"`

Defined in: index.ts:26

将文本颜色设置为深蓝色

### darkGray

> `static` **darkGray**: `string` = `"§8"`

Defined in: index.ts:54

将文本颜色设置为深灰色

### darkGreen

> `static` **darkGreen**: `string` = `"§2"`

Defined in: index.ts:30

将文本颜色设置为深绿色

### darkPurple

> `static` **darkPurple**: `string` = `"§5"`

Defined in: index.ts:42

将文本颜色设置为深紫色

### darkRed

> `static` **darkRed**: `string` = `"§4"`

Defined in: index.ts:38

将文本颜色设置为深红色

### gold

> `static` **gold**: `string` = `"§6"`

Defined in: index.ts:46

将文本颜色设置为金色

### gray

> `static` **gray**: `string` = `"§7"`

Defined in: index.ts:50

将文本颜色设置为灰色

### green

> `static` **green**: `string` = `"§a"`

Defined in: index.ts:62

将文本颜色设置为绿色

### lightPurple

> `static` **lightPurple**: `string` = `"§d"`

Defined in: index.ts:74

将文本颜色设置为浅紫色

### minecoinGold

> `static` **minecoinGold**: `string` = `"§g"`

Defined in: index.ts:86

将文本颜色设置为硬币金色

### red

> `static` **red**: `string` = `"§c"`

Defined in: index.ts:70

将文本颜色设置为红色

### white

> `static` **white**: `string` = `"§f"`

Defined in: index.ts:82

将文本颜色设置为白色

### yellow

> `static` **yellow**: `string` = `"§e"`

Defined in: index.ts:78

将文本颜色设置为黄色
