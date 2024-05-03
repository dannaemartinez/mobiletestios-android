import { remote } from 'webdriverio';
import { iphoneCaps } from './capabilities.js';
import IOSHome from './pageObjects/iosHome.js';

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'error',
  capabilities: iphoneCaps,
  baseUrl: 'http://localhost:3000/',
  browserName: 'chrome',
};
describe('iOS Test', function () {
  let driver;
  this.timeout(60000);
  beforeEach(async function () {
    driver = await remote(wdOpts);
  });
  afterEach(async function () {
    await driver.deleteSession();
  });
  it('Trip submit', async function () {
    await driver.url('/');
    const iosHome = new IOSHome(driver); //leer más sobre instancias 
    await iosHome.gotoAddTrip();          
    await iosHome.introduceDate();
    await iosHome.introducePlace();
    await iosHome.introduceType();
    await iosHome.saveRegister();
    await iosHome.goToRegisters();
  });
});
