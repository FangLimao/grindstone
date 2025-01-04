import { getModId } from "@grindstone/core";

let questNameSpace: string = getModId();

export class QuestManager {
  /**
   * Set the quest tag's namespace.
   * @param namespace New namespace to set.
   * @return New quest tag namespace.
   */  
  static setNameSpace(namespace: string): string {
    return (questNameSpace = namespace);
  }
  /**
   * Get the quest tag's namespace.
   * @return The quest tag namespace.
   */  
  static getNameSpace(): string {
    return questNameSpace;
  }
}
