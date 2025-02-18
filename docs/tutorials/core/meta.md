# 获取模组信息
## 名称与ID
~~~ts
getModId(): string
getModName(): string
~~~

获取模组设置的ID与名称。

~~~ts
setModName(name: string): string
setModId(id: string): string
~~~

设置的模组的ID与名称。

## 模组版本
你可以通过`set/getModVersion()`来获取模组的版本：

~~~ts
setModVersion("1.14.514");
getModVersion(); // return '1.14.514'
~~~