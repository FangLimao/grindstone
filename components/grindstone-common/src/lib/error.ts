/**
 * 开发包错误
 * @category Legacy
 * @deprecated `core.GrindstoneError`已经代替了此类
 * @since 1.0.0
 */
export class DevkitError extends Error {
  constructor(message?: string) {
    if (!message) {
      message = "An unknown error has occurred!";
    }
    super(message);
  }
}
