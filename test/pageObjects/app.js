import { config } from '../wdio.conf.js';
export default class App {
  constructor(driver) {
    this.title = '';
    this.driver = driver;
  }
  async openIos(path) {
    await browser.url(path);
  }
 
}