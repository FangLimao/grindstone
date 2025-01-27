**@grindstone/effect-kit v0.1.0**

***

# Grindstone Effect Kit
这是一个构建模拟状态效果的工具包。

## 构建
~~~ts
class VirtualEffect {
  constructor(
    readonly id: string,
    public maxLevel: number,
    protected triggerTick: number = 1
  ) {}
}
~~~

你需要指定三个参数——`id`、`maxLevel`和`triggerTick`，然后通过调用`startTrigger`方法启动监听，如：

~~~ts
export const bleedEffect = new VirtualEffect("bleed", 2, 20)

bleedEffect.startTrigger();
~~~

在调用了`startTrigger`方法后，游戏将会启动一个间隔任务，以搜寻拥有该效果的实体，而搜寻的间隔将由`triggerTick`设置。

在这之后，你就可以通过`setEffect`方法操作拥有该效果的实体，还可以通过`setLevelUp`方法设置实体的效果等级发生变化时的事件：
~~~ts
bleedEffect.setEffect((entity, level) => {
  if (level === 1) {
    entity.applyDamage(1);
    entity.addEffect("slowness", 40, { amplifier: 1 });
  }
  if (level === 2) {
    entity.applyDamage(2);
    entity.addEffect("slowness", 40, { amplifier: 2 });
  }
});

bleedEffect.setLevelUp((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.bleed" });
  }
});
~~~
