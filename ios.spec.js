const {remote} = require('webdriverio');
const {iphoneCaps} = require('./capabilities');

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'silent',
  capabilities: iphoneCaps,
  baseUrl: 'http://localhost:3000/',
};
describe('iOS Test',function() {
    let driver;
    this.timeout(10000);
    beforeEach(async function(){
    driver = await remote(wdOpts);
    })
    afterEach(async function(){
        await driver.pause(10000);
        await driver.deleteSession();
    })
    it('Trip submit', async function() {
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
    })
})

