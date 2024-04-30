import { By } from 'selenium-webdriver';
import App from './app';

class Android extends App {
    constructor(driver) {
        this.driver = driver;
        this.iconCalendar = By.css('a:nth-child(2) path');
        this.dateInput = By.css('#date');
        this.loginButton = By.xpath('//android.view.View[@content-desc="05 April 2024"]');
        const setButton = 'new UiSelector().resourceId("android:id/button1")';

    }

    async login(username, password) {
        await $(this.usernameInput).setValue(username);
        await $(this.passwordInput).setValue(password);
        await $(this.loginButton).click();
    }
}

module.exports = LoginPage;