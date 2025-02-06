# Grindstone Material Kit
> [!IMPORTANT]
> 该包仍在开发中，可能缺失部分功能与文档

这个包提供了定义各种模拟材料的功能，如工具材料、武器材料、食物材料等。

该包与 Item Kit 不同的是，这里提供的材料无需`build()`方法即可正常使用，而且其初始化函数也得到了精简。

## 关于调试模式
该包中部分类可以开启「调试模式」，开启后当检测到对应实例在游戏内的操作（如挖掘方块、触发技能）时会输出调试信息到日志中。

**该模式仅供调试，因为过多的日志输出会导致游戏卡顿。**

## 工具材料
> [!TIP]
> 工具材料功能已经在 0.16.0 趋于稳定

### 创建
创建一个新的工具材料：
```ts
new ToolMaterial("example:tag", true)
```

这将会自动为其添加：

- 锹、斧、锄的使用音效与耐久监听；
- 挖掘方块的耐久监听。

其中初始化函数第二个参数代表是否开启调试模式，若开启，则物品消耗耐久时会写入日志。

### 添加事件监听器
```ts
const tool = new ToolMaterial("example:tag", true);

tool.onHitEntity((callback)=>{
   console.log("击中实体！")
 })
```

目前可添加的监听器有：

```ts
  /**
   * 当工具材料对应的工具损坏时触发的事件监听器
   * @param callback
   */
  onToolBreak(callback: (data: ToolBreakAfterEvent) => void) {
    this.eventTriggers.destroyedAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具使用时触发的事件监听器
   * @param callback
   */
  onToolUse(callback: (data: ItemUseAfterEvent) => void) {
    this.eventTriggers.useAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具挖掘方块时触发的事件监听器
   * @param callback
   */
  onToolBreakBlock(callback: (data: PlayerBreakBlockAfterEvent) => void) {
    this.eventTriggers.breakBlockAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具击打实体时触发的事件监听器
   * @param callback
   */
  onHitEntity(callback: (data: EntityHitEntityAfterEvent) => void) {
    this.eventTriggers.attackAfterEvents = callback;
  }
```

## 武器材料
> [!TIP]
> 武器材料功能已经在 0.16.4 趋于稳定

### 创建
创建一个新的工具材料：
```ts
new WeaponMaterial("example:tag", true)
```

这将会自动为其添加：

- 挖掘方块的耐久监听。

其中初始化函数第二个参数代表是否开启调试模式，若开启，则物品消耗耐久时会写入日志。

### 添加技能
定义一个攻击技能：

```ts
const skill = new WeaponAtkSkill(3); // 这里的数值决定了当有多个技能可用时，选择该技能进行触发的权重
skill.onReleased((callback) => {
  const [target, atker] = [callback.target, callback.releaser];
  if (atker instanceof Player) atker.addExperience(10);
});
```

其中技能的`onRealsed`方法定义了技能释放时执行的操作，除此之外，你还可以为其添加触发提示：

```ts
skill.setTips({ translate: "message.itemSkill.1" });
```

定义好后，就可以向武器材料添加技能了：

```ts
new WeaponMaterial("example:tag").addSkill(skill1, skill2, skill3...)
```

### 添加事件监听器
```ts
const weapon = new WeaponMaterial("example:tag", true);

weapon.onWeaponBreak((callback)=>{
   console.log("该物品已经损坏！")
 })
```

目前可用的监听器有：

```ts
  /**
   * 当工具材料对应的工具损坏时触发的事件监听器
   * @param callback
   */
  onWeaponBreak(callback: (data: ItemBreakAfterEvent) => void) {
    this.eventTriggers.destroyedAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具挖掘方块时触发的事件监听器
   * @param callback
   */
  onToolBreakBlock(callback: (data: PlayerBreakBlockAfterEvent) => void) {
    this.eventTriggers.breakBlockAfterEvents = callback;
  }
```
> [!IMPORTANT]
> 如果想监听该武器的使用和击打事件，请为其添加使用/攻击技能