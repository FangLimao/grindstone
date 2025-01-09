# Grindstone Quest Kit
这是一个帮助构建简单任务的工具包。

## 设置语言文件
在开始之前，你需要在语言文件中添加以下内容：
~~~
api.unexpected_error.quest=任务系统出现未知错误
quest.finished=你完成了一个任务！
quest.done=任务已完成
quest.check=尝试提交任务
quest.not_enough.item=材料不足，你需要 %1 个 %2 才能完成这个任务
quest.not_enough.level=你需要 %1 级经验才能完成这个任务
quest.not_enough.xp=你需要 %1 点经验才能完成这个任务
quest.not_enough.entity=你还需要 %1 个特定任务才能完成这个任务
quest.not_enough.entity=你需要杀死 %1 才能完成这个任务
quest.condition=§e完成条件§r：
quest.award=§e完成奖励§r：
quest.item=%1 个 %2;
quest.xp=%1 点经验
quest.level=%1 级经验
quest.quests=完成 %1 个特定任务
quest.entity=杀死 %1
quest.reward.none=无奖励
quest.condition.none=无条件
quest.tips=§4提示§r：
~~~

## 定义任务
你可以通过Quest类来定义一个任务：

~~~ts
class Quest {
  constructor(
    readonly id: string,
    protected _title: string | RawMessage,
    protected _body: string | RawMessage,
    public options: QuestOptions
  ) {}
}
~~~

在其中，`_title`和`_body`决定了任务的标题和描述，而`options`控制这个任务的其他选项：

~~~ts
export interface QuestOptions {
  condition: QuestCondition;
  award: QuestAward;
  tips?: RawMessage | string;
  iconPath?: string;
}
~~~
`condition`控制完成这个任务所需的条件，`award`控制完成任务后给予的奖励。

`tips`和`iconPath`是可选项，分别控制任务的提示与任务的图标。

### 任务条件
~~~ts
interface QuestCondition {
  item?: ItemData;
  playerXpLevel?: number;
  playerXpPoint?: number;
  killEntity?: EntityData;
  quests?: Quest[];
}

interface ItemData {
  name: RawMessage;
  itemStack: ItemStack;
}

interface EntityData {
  name: string;
  typeId: string;
}
~~~

需要注意的是，为方便本地化工作，`killEntity`和`item`的类型应该是对应的`EntityData`和`ItemData`。

### 任务奖励
~~~ts
interface QuestAward {
  item?: ItemData;
  level?: number;
  exp?: number;
  custom?: (player: Player) => void;
}
~~~

## 定义任务书
只有任务是不够的，还需要一本任务书来承载任务：
~~~ts
class QuestBookBuilder {
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public quests: Quest[],
    public iconPath?: string
  ) {}
}
~~~

例如：

~~~ts
const questBook: QuestBookBuilder = new QuestBookBuilder("id", "任务书标题", "任务书描述", [quest_1,quest2,...]);
questBook.build();
~~~

需要注意的是，任务书只有在调用`build()`方法后才能正常使用。
