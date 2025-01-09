export class DevkitError extends Error {
  constructor(message?: string) {
    if (!message) {
      message = "An unknown error has occurred!";
    }
    super(message);
  }
}
