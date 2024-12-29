# Grindstone Debugger Kit
## Logger
### 获取
~~~ts
const logger = LoggerManager.getLogger("logger_id");
~~~
获取一个Logger

### 设置日志等级
~~~ts
logger.setLogLevel(level: LogLevel, player?: Player)
~~~
设置玩家/世界的日志等级

日志等级如下：
~~~ts
enum LogLevel {
  DEBUG = -1,
  INFO = 0,
  WARN = 1,
}
~~~

### 输出
你可以通过以下方法向日志输出对应等级的内容：

~~~ts
logger.debug(message: string, players?: Player[]): void
logger.info(message: string, players?: Player[]): void
logger.warn(message: string, players?: Player[]): void
logger.error(message: string, players?: Player[]): void
logger.fatal(message: string): void
~~~

### 获取输出内容
~~~ts
getLogHistory()
~~~
你可以通过`getLogHistory()`函数获取所有输出内容（仅限本模组的输出）
