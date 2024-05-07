import { remote } from 'webdriverio';
import { androidCaps } from './capabilities.js';
import AndroidHome from './pageObjects/androidHome.js';
import {tripOptions, dateOptions, typeOptions} from './readExcel.js';
let size = dateOptions.length;

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'error',
  capabilities: androidCaps,
  baseUrl: 'http://10.0.2.2:3000/',
  browserName: 'chrome',
};
describe('Android test', function () {
  let driver;
  this.timeout(60000);
  beforeEach(async function () {
    driver = await remote(wdOpts);
  });
  afterEach(async function () {
    await driver.deleteSession();
  });
  it('Trip submit', async function () {
    for(let i = 0; i < size; i++){
    await driver.url('/');
    const androidHome = new AndroidHome(driver);
    await androidHome.gotoAddTrip(); 
    await androidHome.goToDate();
    await driver.switchContext('NATIVE_APP');         
    await androidHome.introduceDate(dateOptions[i]);
    await androidHome.introducePlace(tripOptions[i]);
    await androidHome.introduceType(typeOptions[i]);
    await androidHome.saveRegister();
    await androidHome.goToRegisters();
    }
  });
});
