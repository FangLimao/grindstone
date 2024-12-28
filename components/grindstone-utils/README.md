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

### randomInteger
~~~ts
randomInteger(max: number, min: number = 0): number
~~~
生成范围内的随机整数：

- `max`：随机数的最大值
- `min`：随机数的最小值，默认为0

注意：**若max < min，该函数会抛出RangeError。**