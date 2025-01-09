# Grindstone Item Kit
这是一个构建物品的的工具包。

## 构建食物
需要与原版的`minecraft:food`组件一起工作：

~~~ts
class FoodItemBuilder {
  constructor(
    readonly typeId: string,
    public statusEffects?: EffectData[],
    public eatEvent?: (arg: ItemCompleteUseAfterEvent) => void
  ) {}
}

const food = new FoodItemBuilder("flm:daimao");
food.build(); // 必须通过build()方法使食物在游戏中生效 
~~~
其中`typeId`为食物的物品ID，`statusEffects`决定了食用物品后给予玩家的状态效果，`eatEvent`则决定食用该食物后的事件。
