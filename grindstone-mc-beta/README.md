# Grindstone Kit Beta
> [!IMPORTANT] 
> 此项目处于开发阶段，API可能会发生重大变化

Minecraft 基岩版脚本API的一个简易开发工具包。

## 使用

在`.npmrc`文件中添加以下内容：

~~~
@grindstone:registry=https://codeberg.org/api/packages/grindstone/npm/
~~~

接着运行以下命令：

~~~bash
npm install @grindstone/devkit
~~~

## 打包
你需要一个支持将依赖递归打包进输出文件的脚本打包器，例如Esbuild。