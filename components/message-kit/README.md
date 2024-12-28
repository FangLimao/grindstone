# Grindstone Message Kit
## 欢迎消息
~~~ts
sendWelcomeMessage(
  message: string | RawMessage | (string | RawMessage)[]
): void
~~~
在玩家进入时显示一条欢迎消息。

## Alert、Confirm和Prompt
~~~ts
modAlert(
  message: string | RawMessage,
  player: Player[] | Player
): void

modConfirm(
  message: string | RawMessage,
  player: Player
): Promise<MessageFormResponse> 

modPrompt(
  message: string | RawMessage,
  placeholderText: string | RawMessage,
  player: Player,
  defaultText?: string
): Promise<ModalFormResponse>
~~~
类似于原生的`alert()`、`confirm()`和`prompt()`函数，但是使用表单实现，其中`modConfirm()`和`modPrompt()`会返回对应表单的Promise。