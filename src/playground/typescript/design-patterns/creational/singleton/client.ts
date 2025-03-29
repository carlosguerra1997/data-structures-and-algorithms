import { Logger } from './logger'

export class Client {
  public singleton1: Logger = Logger.getInstance()
  public singleton2: Logger = Logger.getInstance()

  public run() {
    if (this.singleton1 === this.singleton2) {
      this.singleton1.log('[Singleton 1]: Its working! Both variables point to the same memory reference (same instance).');
    } else {
      this.singleton2.log('[Singleton 2]: Its failing! Variables contain different memory references (different instances).');
    }
  }
}

const client = new Client()
client.run()