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