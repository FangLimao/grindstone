import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  tutorials: [
    {
      text: "快速开始",
      link: "/tutorials/start.md",
    },
    {
      text: "核心脚本",
      collapsed: false,
      items: [
        {
          text: "初始化模组",
          link: "/tutorials/core/init.md",
        },
        {
          text: "获取模组信息",
          link: "/tutorials/core/meta.md",
        },
      ],
    },
  ],
  refs: [
    {
      text: "Core",
      link: "/refs/core/globals.md",
      items: [
        {
          text: "Other",
          collapsed: true,
          items: [{ text: "modData", link: "/refs/core/variables/modData.md" }],
        },
        {
          text: "Stable",
          collapsed: true,
          items: [
            {
              text: "ModMetaData",
              link: "/refs/core/interfaces/ModMetaData.md",
            },
            { text: "getModId", link: "/refs/core/functions/getModId.md" },
            { text: "getModName", link: "/refs/core/functions/getModName.md" },
            {
              text: "getModVersion",
              link: "/refs/core/functions/getModVersion.md",
            },
            {
              text: "initializeMod",
              link: "/refs/core/functions/initializeMod.md",
            },
            { text: "setModId", link: "/refs/core/functions/setModId.md" },
            { text: "setModName", link: "/refs/core/functions/setModName.md" },
            {
              text: "setModVersion",
              link: "/refs/core/functions/setModVersion.md",
            },
          ],
        },
      ],
    },
    {
      text: "Common",
      link: "/refs/common/globals.md",
      items: [
        {
          text: "Deprecated",
          collapsed: true,
          items: [
            {
              text: "axeConvertBlockIds",
              link: "/refs/common/variables/axeConvertBlockIds.md",
            },
            {
              text: "hoeConvertBlockIds",
              link: "/refs/common/variables/hoeConvertBlockIds.md",
            },
            {
              text: "shovelConvertBlockIds",
              link: "/refs/common/variables/shovelConvertBlockIds.md",
            },
          ],
        },
        {
          text: "Legacy",
          collapsed: true,
          items: [
            {
              text: "DevkitError",
              link: "/refs/common/classes/DevkitError.md",
            },
          ],
        },
        {
          text: "Stable",
          collapsed: true,
          items: [
            {
              text: "DisplayCondition",
              link: "/refs/common/interfaces/DisplayCondition.md",
            },
            {
              text: "EffectData",
              link: "/refs/common/interfaces/EffectData.md",
            },
            {
              text: "EntityData",
              link: "/refs/common/interfaces/EntityData.md",
            },
            { text: "ItemData", link: "/refs/common/interfaces/ItemData.md" },
            {
              text: "negativeEffectsId",
              link: "/refs/common/variables/negativeEffectsId.md",
            },
            {
              text: "neutralEffectsId",
              link: "/refs/common/variables/neutralEffectsId.md",
            },
            {
              text: "positiveEffectsId",
              link: "/refs/common/variables/positiveEffectsId.md",
            },
          ],
        },
      ],
    },
    {
      text: "Utils",
      link: "/refs/utils/globals.md",
      items: [
        {
          text: "Stable",
          collapsed: true,
          items: [
            {
              text: "EffectGroups",
              link: "/refs/utils/enumerations/EffectGroups.md",
            },
            {
              text: "PercentChanceData",
              link: "/refs/utils/interfaces/PercentChanceData.md",
            },
            {
              text: "WeightChanceData",
              link: "/refs/utils/interfaces/WeightChanceData.md",
            },
            {
              text: "WeightChanceResult",
              link: "/refs/utils/interfaces/WeightChanceResult.md",
            },
            {
              text: "LootToolType",
              link: "/refs/utils/type-aliases/LootToolType.md",
            },
            { text: "addEffect", link: "/refs/utils/functions/addEffect.md" },
            {
              text: "affectEntities",
              link: "/refs/utils/functions/affectEntities.md",
            },
            {
              text: "applyEffectData",
              link: "/refs/utils/functions/applyEffectData.md",
            },
            {
              text: "ascendingSort",
              link: "/refs/utils/functions/ascendingSort.md",
            },
            {
              text: "checkPercent",
              link: "/refs/utils/functions/checkPercent.md",
            },
            {
              text: "clearEffect",
              link: "/refs/utils/functions/clearEffect.md",
            },
            { text: "clearSlot", link: "/refs/utils/functions/clearSlot.md" },
            {
              text: "consumeAmount",
              link: "/refs/utils/functions/consumeAmount.md",
            },
            {
              text: "consumeDurability",
              link: "/refs/utils/functions/consumeDurability.md",
            },
            {
              text: "damageEntities",
              link: "/refs/utils/functions/damageEntities.md",
            },
            {
              text: "descendingSort",
              link: "/refs/utils/functions/descendingSort.md",
            },
            {
              text: "ensureNamespace",
              link: "/refs/utils/functions/ensureNamespace.md",
            },
            { text: "findBlocks", link: "/refs/utils/functions/findBlocks.md" },
            {
              text: "generateUUID",
              link: "/refs/utils/functions/generateUUID.md",
            },
            { text: "getAllExp", link: "/refs/utils/functions/getAllExp.md" },
            {
              text: "getContainer",
              link: "/refs/utils/functions/getContainer.md",
            },
            {
              text: "getEquipmentItem",
              link: "/refs/utils/functions/getEquipmentItem.md",
            },
            { text: "getExpCost", link: "/refs/utils/functions/getExpCost.md" },
            {
              text: "getItemAmountInContainer",
              link: "/refs/utils/functions/getItemAmountInContainer.md",
            },
            { text: "giveItem", link: "/refs/utils/functions/giveItem.md" },
            {
              text: "giveItemOnce",
              link: "/refs/utils/functions/giveItemOnce.md",
            },
            { text: "insertLoot", link: "/refs/utils/functions/insertLoot.md" },
            { text: "loot", link: "/refs/utils/functions/loot.md" },
            { text: "pushLore", link: "/refs/utils/functions/pushLore.md" },
            {
              text: "randomDecimal",
              link: "/refs/utils/functions/randomDecimal.md",
            },
            {
              text: "randomInteger",
              link: "/refs/utils/functions/randomInteger.md",
            },
            {
              text: "removeItemInContainer",
              link: "/refs/utils/functions/removeItemInContainer.md",
            },
            {
              text: "replaceItemStack",
              link: "/refs/utils/functions/replaceItemStack.md",
            },
            {
              text: "setEquipmentItem",
              link: "/refs/utils/functions/setEquipmentItem.md",
            },
            { text: "setSlot", link: "/refs/utils/functions/setSlot.md" },
            {
              text: "tryOperateEntity",
              link: "/refs/utils/functions/tryOperateEntity.md",
            },
            {
              text: "withPercentChance",
              link: "/refs/utils/functions/withPercentChance.md",
            },
            {
              text: "withWeightChance",
              link: "/refs/utils/functions/withWeightChance.md",
            },
          ],
        },
      ],
    },
    {
      text: "工具包",
      collapsed: false,
      items: [
        {
          text: "@grindstone/article-kit",
          link: "/refs/article-kit/globals.md",
        },
        {
          text: "@grindstone/debugger-kit",
          link: "/refs/debugger-kit/globals.md",
        },
        {
          text: "@grindstone/effect-kit",
          link: "/refs/effect-kit/globals.md",
        },
        {
          text: "@grindstone/entity-kit",
          link: "/refs/entity-kit/globals.md",
        },
        {
          text: "@grindstone/format-kit",
          link: "/refs/format-kit/globals.md",
          items: [
            {
              text: "Stable",
              collapsed: true,
              items: [
                { text: "Color", link: "/refs/format-kit/classes/Color.md" },
                { text: "Format", link: "/refs/format-kit/classes/Format.md" },
              ],
            },
          ],
        },
        {
          text: "@grindstone/item-kit",
          link: "/refs/item-kit/globals.md",
        },
        {
          text: "@grindstone/message-kit",
          link: "/refs/article-kit/globals.md",
        },
        {
          text: "@grindstone/quest-kit",
          link: "/refs/quest-kit/globals.md",
        },
      ],
    },
  ],
  tools: [],
};
