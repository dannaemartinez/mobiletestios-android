import App from './app.js';

class IOSHome extends App {
  constructor(driver){
    super(driver);
    this.driver = driver;
  }
  get calendarIcon() {
    return this.driver.$(
      '//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[2]');
  }
  get date() {
    return this.driver.$('//XCUIElementTypeOther[@name="Date:"]');
  }
  get setDate() {
    return this.driver.$('//XCUIElementTypeStaticText[@name="19"]');
  }
  get saveDateButton() {
    return this.driver.$('#Done');
  }
  get placeInput() {
    return this.driver.$('//XCUIElementTypeTextField[@name="Place:"]');
  }
  get typeSelector() {
    return this.driver.$('~Type:');
  }
  get selectOptionClub() {
    return this.driver.$('~Club');
  }
  get submitButton() {
    return this.driver.$('~SUBMIT');
  }
  get registersIcon() {
    return this.driver.$('//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[3]');
  }

  async gotoAddTrip() {
    await this.calendarIcon.click();
  }
  async introduceDate() {
    await this.date.click();
    await this.setDate.click();
    await this.saveDateButton.click();
  }
  async introducePlace() {
    await this.placeInput.setValue('new place');
  }
  async introduceType() {
    await this.typeSelector.click();
    await this.selectOptionClub.click();
  }
  async saveRegister() {
    await this.submitButton.click();
  }
  async goToRegisters() {
    await this.registersIcon.click();
  }
}
export default IOSHome;