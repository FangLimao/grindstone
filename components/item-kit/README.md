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

## 构建道具
通过Prop系列可以构建一个简单道具：

~~~ts
class PropBuilder {
  constructor(
    readonly typeId: string,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {}
}

class DurabilityLimitedPropBuilder extends PropBuilder {
  constructor(
    readonly typeId: string,
    public durabilityValue: number,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {}
}

class NumberLimitedPropBuilder extends PropBuilder {
  constructor(
    readonly typeId: string,
    public options: NumberLimitedPropOptions,
    public useEvent?: (arg: ItemUseAfterEvent) => void
  ) {}
}

interface NumberLimitedPropOptions {
  maxUse: number;
  onceConsumed?: number;
}
~~~

其中的`PropBuilder`所定义的道具使用一次后就会消失，`DurabilityLimitedPropBuilder`定义的道具在使用后会消耗耐久值，`NumberLimitedPropBuilder`定义的道具有限定的使用次数，次数消耗完后道具自动损坏。

与其他Builder类似，道具也需要通过`build()`方法使其在游戏中可用：

~~~ts
cosnt prop = new NumberLimitedPropBuilder("example_id", {
  maxUse: 114514
}, (arg)=> {
  arg.source.sendMessage("你使用了这个物品！")
})

prop.build();
~~~

## 构建礼物
通过Gift系列可以构造礼物：
~~~ts
class GiftItemBuilder {
  constructor(
    readonly typeId: string,
    public reward: RewardType,
    public sound?: string,
  ) {}
}

class PercentGiftItemBuilder extends GiftItemBuilder {
  constructor(
    readonly typeId: string,
    public chance: number,
    public reward: RewardType,
    public sound?: string,
  ) {
    super(typeId, reward, sound);
  }
}

class WeightGiftItemBuilder {
  constructor(
    readonly typeId: string,
    public data: RewardWeightData[],
    public sound?: string,
  ) {}
}

interface RewardType {
  items?: ItemStack[];
  level?: number;
  exp?: number;
}
~~~

与其他Builder类似，礼物也需要通过`build()`方法使其在游戏中可用。

## 构建工具