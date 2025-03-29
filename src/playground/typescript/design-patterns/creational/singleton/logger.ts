export class Logger {
  /*
  * This would be the Eager Initialization approach
  * private static instance: Logger = new Logger()
  */

  private static instance: Logger

  private constructor() {}

  // This is the Lazy Initialization approach
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  public log(message: string): void {
    console.log(`[LOG]: ${message}`)
  }
}