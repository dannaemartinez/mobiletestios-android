import {remote} from 'webdriverio';
import {iphoneCaps} from './capabilities.js';

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities: iphoneCaps,
  baseUrl: 'http://localhost:3000/',
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    await driver.url("/");
    await driver.$('//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Date:"]').click();
    await driver.$('//XCUIElementTypeStaticText[@name="19"]').click();
    await driver.$('#Done').click();
    await driver.$('//XCUIElementTypeTextField[@name="Place:"]').setValue('place');
    await driver.$('~Type:').click();
    await driver.$('~Club').click();
    await driver.$('~SUBMIT').click();
    await driver.$('//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[3]').click();
  } finally {
    await driver.pause(10000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);