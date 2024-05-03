import App from './app.js';

class AndroidHome extends App {
    constructor(driver) {
        super(driver);
        this.driver = driver;
    }
    get iconCalendar(){ return this.driver.$('a:nth-child(2) path')};
    get dateInput(){ return this.driver.$('#date')};
    get setDate(){ return this.driver.$('//android.view.View[@content-desc="05 April 2024"]')};
    get setButton (){ return this.driver.$('new UiSelector().resourceId("android:id/button1")')};
    get setDateButton(){return this.driver.$(`android=${this.setButton}`)};
    get placeInput (){return this.driver.$('.android.widget.EditText')};
    get typeSelector (){return this.driver.$$('.android.view.View')[3]};
    get selectOptionClub (){return this.driver.$('.android.widget.CheckedTextView')};
    get submitButton (){return this.driver.$('.android.widget.Button')}


    async gotoAddTrip() {
        await this.iconCalendar.click();
      }
      async goToDate() {
        await this.dateInput.click();
      }
      async introduceDate() {
        await this.setDate.click();
        await this.setDateButton.click();
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
    //   async goToRegisters() {
    //     await this.registersIcon.click();
    //   }
}

export default AndroidHome;