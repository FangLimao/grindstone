**@grindstone/core v0.3.0**

***

# Grindstone Kit Core
## 初始化函数
~~~ts
initializeMod(
  id: string,
  name: string,
  event?: (arg: WorldInitializeAfterEvent) => void
): void
~~~

你可以使用这个函数来初始化模组的信息：

- `id`：模组的ID
- `name`：模组的名称
- `event`：脚本环境初始化后执行的事件

## 信息类函数
~~~ts
getModId(): string
getModName(): string
~~~

获取模组设置的ID与名称。

~~~ts
setModName(name: string): void
setModId(id: string): void
~~~

设置的模组的ID与名称。

## 模组版本
你可以通过`set/getModVersion()`来获取模组的版本：

~~~ts
setModVersion("1.14.514");
getModVersion(); // return '1.14.514'
~~~
