const {remote} = require('webdriverio');
const {androidCaps} = require('./capabilities');

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'silent',
  capabilities: androidCaps,
  baseUrl: 'http://10.0.2.2:3000/',
};
describe('Android test',function() {
    let driver;
    this.timeout(10000)
    beforeEach(async function(){
    driver = await remote(wdOpts);
    })
    afterEach(async function(){
        await driver.pause(10000);
        await driver.deleteSession();
    })
    it('Trip submit', async function() {
      await driver.url("/");
      await driver.$("a:nth-child(2) path").click()
      await driver.$("#date").click();
      await driver.switchContext('NATIVE_APP');
      await driver.$('//android.view.View[@content-desc="05 April 2024"]').click();
      const setButton = 'new UiSelector().resourceId("android:id/button1")'
      await driver.$(`android=${setButton}`).click();
      await driver.$('.android.widget.EditText').click();
      //await driver.$('.android.widget.EditText').sendKeys('place');
      await driver.$$('.android.view.View')[3].click();
      await driver.$('.android.widget.CheckedTextView').click();
      await driver.$('.android.widget.Button').click();
    })
})

