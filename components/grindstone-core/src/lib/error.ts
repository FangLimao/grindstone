/**
 * Grindstone 脚本实例的错误
 * @category stable
 */
export class GrindstoneError extends Error {
  constructor(message?: string) {
    if (!message) {
      message = "Grindstone 出现了未知错误！";
    }
    super(message);
    this.name = "Grindstone Error";
  }
}
