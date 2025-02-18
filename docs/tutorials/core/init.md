# 初始化模组
## 初始化模组函数
~~~ts
initializeMod(
  id: string,
  name: string,
  event?: (arg: WorldInitializeAfterEvent) => void
): void
~~~

> [!IMPORTANT]
> 如果模组ID为`default`则会抛出错误

你可以使用这个函数来初始化模组的信息：

- `id`：模组的ID
- `name`：模组的名称
- `event`：脚本环境初始化后执行的事件

## 设置模组版本
~~~ts
setModVersion("1.14.514");
~~~

你可以使用这个函数来设置模组的版本，请注意不要设置为`0.0.0`，因为这将会被视为未设置版本号。