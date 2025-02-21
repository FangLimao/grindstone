# Grindstone Utils Kit
## 维度类函数
### loot
~~~ts
loot(
  dimension: Dimension,
  location: Vector3,
  path: string,
  toolType?: LootToolType
): void
~~~
向特定维度生成战利品：

- `dimension`：要生成战利品的维度
- `location`：生成战利品的坐标
- `path`：战利品表路径
- `toolType`：模拟使用的工具，可填`mainhand`、`offhand`或其他物品ID

### insertLoot
~~~ts
insertLoot(
  dimension: Dimension,
  blockLocation: Vector3,
  path: string,
  toolType?: LootToolType
): void
~~~
向特定维度的容器方块生成战利品：

- `dimension`：要生成战利品的维度
- `location` 容器方块的坐标
- `path`：战利品表路径
- `toolType`：模拟使用的工具，可填`mainhand`、`offhand`或其他物品ID

## 方块类函数
### findBlocks
~~~ts
findBlocks(
  blockId: string,
  location: Vector3,
  dimension: Dimension,
  radius: number,
): Block[]
~~~
在指定维度，以某点为中心寻找方块：

- `blockId`：要寻找的方块ID
- `location`：坐标原点
- `dimension`：搜寻方块的维度
- `radius`：搜寻方块的半径

## 实体函数
### clearEffect
~~~ts
clearEffect(
    entity: Entity,
    effectType: EffectType | EffectType[] | string | string[] | EffectGroups,
  ): void
~~~
移除实体的状态效果，可填状态效果组：

~~~ts
enum EffectGroups {
    good, // 正面效果
    bad, // 负面效果
    nutral, // 中性效果
    all, //全部效果
  }
~~~

### addEffect
~~~ts
addEffect(
    entity: Entity,
    effectType: EffectType | EffectType[] | string | string[] | EffectGroups,
    duration: number,
    options?: EntityEffectOptions,
  ): void
~~~
向实体添加状态效果，可填状态效果组：

~~~ts
enum EffectGroups {
    good, // 正面效果
    bad, // 负面效果
    nutral, // 中性效果
    all, //全部效果
  }
~~~

### getContainer
~~~ts
getContainer(entity: Entity): Container | undefined
~~~
获取实体的背包。

### setSlot
~~~ts
setSlot(entity: Entity, slot: number, item?: ItemStack): void
~~~
设置实体对应物品栏的物品，若不填物品，则会清空对应的槽位。

### giveItem
~~~ts
giveItem(entity: Entity[] | Entity, item: ItemStack): void
~~~
给予实体特定物品，若实体背包已满，则在实体所在的位置生成对应的物品实体。

### clearSlot
~~~ts
clearSlot(entity: Entity[] | Entity): void
~~~
清除指定实体的背包。

### getEquipmentItem
~~~ts
getEquipmentItem(
    entity: Entity,
    slot = EquipmentSlot.Mainhand,
  ): ItemStack | undefined
~~~
获取指定槽位的物品，若不指定默认获取主手物品。

### setEquipmentItem
~~~ts
setEquipmentItem(
    entity: Entity,
    item?: ItemStack,
    slot: EquipmentSlot = EquipmentSlot.Mainhand,
  ): boolean | undefined
~~~
设置指定槽位的物品，若不指定默认设置主手物品。

### damageEntities
~~~ts
damageEntities(
    dimension: Dimension,
    damageOption: EntityQueryOptions,
    amount: number,
  ): void
~~~
对某维度符合条件的实体施加伤害。

### affectEntities
~~~ts
affectEntities(
    dimension: Dimension,
    affectOption: EntityQueryOptions,
    effectType: EffectType | string,
    duration: number,
    effectOption?: EntityEffectOptions,
  ): void
~~~
对某维度符合条件的实体添加状态效果。

### tryOperateEntity
~~~ts
tryOperateEntity(
    entity: Entity,
    operate: (entity: Entity) => void,
  ): boolean
~~~
先检查实体是否可操作，再进行操作。

## 物品函数
### replaceItemStack
~~~ts
replaceItemStack(
  item: ItemStack | string | undefined,
  newItem: ItemStack | string | undefined,
  container: Container
): number
~~~
替换容器中的物品：

- `item`:替换前的物品，如果不设置，则将会替换所有空格子
- `newItem`：替换后的物品，如果不设置，将会清空所有匹配的物品
- `container`：进行替换操作的容器

### consumeDurability
~~~ts
consumeDurability(
  item: ItemStack,
  value: number,
  entity?: Entity
): ItemStack | undefined
~~~
消耗物品的耐久：

- `item`：要消耗耐久的物品
- `value`：消耗的耐久值
- `entity`：手持物品的实体，如果指定，则物品因耐久损坏时将会播放音效

### consumeAmount
~~~ts
consumeAmount(
  item: ItemStack,
  value: number
): ItemStack | undefined
~~~
消耗物品的数量：

- `item`：要消耗数量的物品
- `value`：消耗的数量

注意：**若给定物品的数量少于消耗的数量，将会抛出错误**

### getItemAmountInContainer
~~~ts
getItemAmountInContainer(
  container: Container,
  item: string
): number
~~~
获取容器内指定物品的数量：

- `container`：指定的容器
- `item`：指定的物品

### removeItemInContainer
~~~ts
removeItemInContainer(
  container: Container,
  itemId: string,
  amount: number
): void
~~~
移除容器中的物品。

### pushLore
~~~ts
pushLore(loreText: string, item: ItemStack): ItemStack
~~~
把文本添加到原有物品Lore的末尾，这将返回一个新的物品。

## 玩家函数
### getExpCost
~~~ts
getExpCost(level: number): number
~~~
获取玩家升级至给定等级所需的经验。

### getAllExp
~~~ts
getAllExp(player: Player): number
~~~
获取玩家当前的总经验值。

## 数学函数
### randomInteger
~~~ts
randomInteger(max: number, min: number = 0, inclusive: boolean = true): number
~~~
生成范围内的随机整数：

- `max`：随机数的最大值
- `min`：随机数的最小值，默认为0
- `inclusive`：生成的随机数是否包含min和max

注意：**若max < min，该函数会抛出RangeError。**

### randomDecimal
~~~ts
randomDecimal(
  max: number,
  min: number = 0,
  fixed: number = 2,
  inclusive: boolean = true
): number
~~~
生成范围内的随机小数：

- `max`：随机数的最大值
- `min`：随机数的最小值，默认为0
- `fixed`：小数点后保留的位数，默认为2
- `inclusive`：生成的随机数是否包含min和max

注意：**若max < min，该函数会抛出RangeError。**

### checkPercent
~~~ts
checkPercent(num: number): boolean
~~~
检查给定数值是否为小数。

## 其他函数
### generateUUID
~~~ts
generateUUID(): string 
~~~

生成一个随机的UUID。

### ensureNamespace
~~~ts
ensureNamespace(str: string): string
~~~

确保字符串含有命名空间，若没有，则会自动加上`minecraft`命名空间。

### ascendingSort
~~~ts
ascendingSort(arr: Array<number>): void
~~~
升序排列给定的数组。

### descendingSort
~~~ts
descendingSort(arr: Array<number>): void
~~~
升序排列给定的数组。
