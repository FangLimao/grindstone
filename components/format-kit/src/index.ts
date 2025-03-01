/**
 * 快速给文本添加颜色的工具，灵感来自于 LeviLamina - LegacyScriptEngine
 * @category Stable
 * @since 1.0.0
 * @example
 * world.getAllPlayers().forEach((player) => {
 * player.sendMessage(Color.black + "将文本设置为黑色！");
 * });
 *
 * @example
 * world.getAllPlayers().forEach((player) => {
 * player.sendMessage({
 *   // 将本地化字符串设置为黑色！
 *   rawtext: [{ text: Color.black }, { translate: "example.translate_string" }],
 *  });
 * });
 */
export class Color {
  private constructor() {}
  /**
   * 将文本颜色设置为黑色
   */
  static black: string = "§0";
  /**
   * 将文本颜色设置为深蓝色
   */
  static darkBlue: string = "§1";
  /**
   * 将文本颜色设置为深绿色
   */
  static darkGreen: string = "§2";
  /**
   * 将文本颜色设置为湖蓝色
   */
  static darkAqua: string = "§3";
  /**
   * 将文本颜色设置为深红色
   */
  static darkRed: string = "§4";
  /**
   * 将文本颜色设置为深紫色
   */
  static darkPurple: string = "§5";
  /**
   * 将文本颜色设置为金色
   */
  static gold: string = "§6";
  /**
   * 将文本颜色设置为灰色
   */
  static gray: string = "§7";
  /**
   * 将文本颜色设置为深灰色
   */
  static darkGray: string = "§8";
  /**
   * 将文本颜色设置为蓝色
   */
  static blue: string = "§9";
  /**
   * 将文本颜色设置为绿色
   */
  static green: string = "§a";
  /**
   * 将文本颜色设置为天蓝色
   */
  static aqua: string = "§b";
  /**
   * 将文本颜色设置为红色
   */
  static red: string = "§c";
  /**
   * 将文本颜色设置为浅紫色
   */
  static lightPurple: string = "§d";
  /**
   * 将文本颜色设置为黄色
   */
  static yellow: string = "§e";
  /**
   * 将文本颜色设置为白色
   */
  static white: string = "§f";
  /**
   * 将文本颜色设置为硬币金色
   *
   * 该颜色在PlayStation上无法正常显示，会显示为无格式或透明。
   */
  static minecoinGold: string = "§g";
  /**
   * 将文本颜色设置为石英色
   */
  static materialQuartz: string = "§h";
  /**
   * 将文本颜色设置为铁灰色
   */
  static materialIron: string = "§i";
  /**
   * 将文本颜色设置为下界合金灰色
   */
  static materialNetherite: string = "§j";
  /**
   * 将文本颜色设置为红石色
   */
  static materialRedstone: string = "§m";
  /**
   * 将文本颜色设置为铜橙色
   */
  static materialCopper: string = "§n";
  /**
   * 将文本颜色设置为金色
   */
  static materialGold: string = "§p";
  /**
   * 将文本颜色设置为绿宝石色
   */
  static materialEmerald: string = "§q";
  /**
   * 将文本颜色设置为钻石色
   */
  static materialDiamond: string = "§s";
  /**
   * 将文本颜色设置为青金石色
   */
  static materialLapis: string = "§t";
  /**
   * 将文本颜色设置为水晶紫色
   */
  static materialAmethyst: string = "§u";
  /**
   * 将文本颜色设置为树脂橙色
   */
  static materialResin: string = "§v";
}

/**
 * 快速格式化文本工具，灵感来自于 LeviLamina - LegacyScriptEngine
 * @category Stable
 * @since 1.0.0
 */
export class Format {
  private constructor() {}
  /**
   * 将文本格式设置为**加粗**
   */
  static bold: string = "§l";
  /**
   * 将文本格式设置为*斜体*
   */
  static italics: string = "§o";
  /**
   * 将文本格式设置为带有下划线
   * @deprecated 由于 Mojang 自身原因，游戏中下划线文本无法正常格式化
   */
  static underline: string = "§n";
  /**
   * 将文本格式设置为带有删除线
   * @deprecated 由于 Mojang 自身原因，游戏中删除线文本无法正常格式化
   */
  static strikeThrough: string = "§m";
  /**
   * 将文本格式设置为随机字符，在部分情况下会显示为`.......`
   */
  static random: string = "§k";
  /**
   * 重置所有文本颜色和格式
   */
  static reset: string = "§r";
  /**
   * 换行
   */
  static newLine: string = "\n";
}
