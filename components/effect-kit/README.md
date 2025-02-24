# Grindstone Effect Kit
这是一个构建模拟状态效果的工具包。

## 构建虚拟状态效果
~~~ts
class VirtualEffect {
  constructor(
    readonly id: string,
    protected updateTick: number = 1,
    protected type?: VirtualEffectType
  ) {}
}
~~~

你需要指定三个参数——`id`、`updateTick`和`type`，注意到`updateTick`是效果更新的间隔，我们建议将其调大一些，因为效果更新过于频繁会使性能开销过大。


~~~ts
export const bleedEffect = new VirtualEffect("bleed", 20)
~~~

在这之后，你就可以通过`onUpdate`方法操作拥有该效果的实体，还可以通过`onAddToEntity`方法设置效果添加到实体后的事件：

~~~ts
bleedEffect.onUpdate((entity, amp) => {
    entity.applyDamage(1 * (amp + 1));
    entity.addEffect("slowness", 40, { amplifier: 1 * (amp + 1) });
  }
);

bleedEffect.onAddToEntity((entity) => {
  if (entity instanceof Player) {
    entity.sendMessage({ translate: "hy.message.bleed" });
  }
});
~~~

## 添加效果
你可以通过`add`方法将效果添加到实体上：

~~~ts
bleedEffect.add(entity, 100, 1);
~~~

其接受三个参数，第一个参数是要添加效果的实体，第二个参数是效果的持续时间，第三个参数是效果的等级。

如果效果添加成功，则会返回`true`，否则返回`false`。

## 移除效果
你可以通过`remove`方法移除效果：

~~~ts
bleedEffect.remove(entity);
~~~

其接受一个参数，即要移除效果的实体。

如果效果移除成功，则会返回`true`，否则返回`false`。