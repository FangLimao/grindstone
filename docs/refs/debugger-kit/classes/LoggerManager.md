[**@grindstone/debugger-kit v0.1.1**](../README.md)

***

[@grindstone/debugger-kit](../globals.md) / LoggerManager

# Class: LoggerManager

Defined in: index.ts:63

## Methods

### debug()

> **debug**(`message`, `players`?): `void`

Defined in: index.ts:114

Log with [LogLevel.DEBUG](../enumerations/LogLevel.md#debug)

#### Parameters

##### message

`string`

##### players?

`Player`[]

#### Returns

`void`

***

### error()

> **error**(`message`, `players`?): `void`

Defined in: index.ts:166

Same as console.error.

#### Parameters

##### message

`string`

##### players?

`Player`[]

the players that would receive stack trace.

#### Returns

`void`

***

### fatal()

> **fatal**(`message`): `void`

Defined in: index.ts:181

Same as `error()`, but the stack trace will be sent to all players

#### Parameters

##### message

`string`

#### Returns

`void`

***

### getLogLevel()

> **getLogLevel**(`player`?): [`LogLevel`](../enumerations/LogLevel.md)

Defined in: index.ts:95

Get player(or the world)'s LogLevel.

#### Parameters

##### player?

`Player`

#### Returns

[`LogLevel`](../enumerations/LogLevel.md)

***

### info()

> **info**(`message`, `players`?): `void`

Defined in: index.ts:132

Log with [LogLevel.INFO](../enumerations/LogLevel.md#info)
The message will be sent to world if no players are given.

#### Parameters

##### message

`string`

##### players?

`Player`[]

#### Returns

`void`

***

### log()

> **log**(`message`, `players`?): `void`

Defined in: index.ts:106

The `log()` function is an alias for [info](LoggerManager.md#info).

#### Parameters

##### message

`string`

##### players?

`Player`[]

#### Returns

`void`

***

### setLogLevel()

> **setLogLevel**(`level`, `player`?): `void`

Defined in: index.ts:84

Set player(or the world)'s LogLevel.

#### Parameters

##### level

[`LogLevel`](../enumerations/LogLevel.md)

##### player?

`Player`

#### Returns

`void`

***

### warn()

> **warn**(`message`, `players`?): `void`

Defined in: index.ts:149

Same as console.warn.

#### Parameters

##### message

`string`

##### players?

`Player`[]

the players that would receive stack trace.

#### Returns

`void`

***

### getLogger()

> `static` **getLogger**(`id`, `feedback`?): [`LoggerManager`](LoggerManager.md)

Defined in: index.ts:76

Get a new Logger

#### Parameters

##### id

`string`

The logger's id.

##### feedback?

`string`

the info which will be sent when an error or a fatal error.

#### Returns

[`LoggerManager`](LoggerManager.md)
