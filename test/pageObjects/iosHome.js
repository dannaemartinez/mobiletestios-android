import App from './app.js';

class IOSHome extends App {
  constructor(driver){
    super(driver);
    this.driver = driver;
  }
  get calendarIcon() {
    return this.driver.findElement(
      '//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[2]');
  }
  get date() {
    return this.driver.findElement('//XCUIElementTypeOther[@name="Date:"]');
  }
  get setDate() {
    return this.driver.findElement('//XCUIElementTypeStaticText[@name="19"]');
  }
  get saveDateButton() {
    return this.driver.findElement('#Done');
  }
  get placeInput() {
    return this.driver.findElement('//XCUIElementTypeTextField[@name="Place:"]');
  }
  get typeSelector() {
    return this.driver.findElement('~Type:');
  }
  get selectOptionClub() {
    return this.driver.findElement('~Club');
  }
  get submitButton() {
    return this.driver.findElement('~SUBMIT');
  }
  get registersIcon() {
    return this.driver.findElement('//XCUIElementTypeOther[@name="navigation"]/XCUIElementTypeLink[3]');
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