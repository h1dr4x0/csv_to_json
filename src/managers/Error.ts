import { ErrorLevel } from "../enums/ErrorLevel";
import pc from "picocolors";

class Error {
  private message: string;
  public constructor(message: string, level: ErrorLevel) {
    if (!message) {
      return;
    }
    if (!level) {
      level = ErrorLevel.INFO;
    }
    this.message = message;
    switch (level) {
      case ErrorLevel.INFO:
        this.info();
        break;
      case ErrorLevel.WARN:
        this.warn();
        break;
      case ErrorLevel.ERROR:
        this.error();
        break;
    }
  }
  private info(): void {
    const prefix: string = pc.cyan("[INFO]");
    const text: string = pc.blue(this.message);
    console.log(`${prefix} ${text}`);
    return;
  }
  private warn(): void {
    const prefix: string = pc.yellow("[WARN]");
    const text: string = pc.yellow(this.message);
    console.log(`${prefix} ${text}`);
  }
  private error(): void {
    const prefix: string = pc.red("[ERROR]");
    const text: string = pc.red(this.message);
    console.log(`${prefix} ${text}`);
  }
}

export { Error };
