import { config as configDotenv } from 'dotenv';
import SiteAdminPage from '../../SiteAdministration/site_admin_page';

configDotenv();

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameSelector = '[name="username"]';
    this.passwordSelector = '[name="password"]';
    this.loginButtonSelector = '[type="submit"]';
    this.errorMessageSelector = '#error';
  }

  async navigate() {
    await this.page.goto(process.env.URL);
    await this.page.setViewport({width: 1080, height: 1024});
    return this.page;
  }

  async enterUsername(username) {
    await this.page.waitForSelector(this.usernameSelector);
    await this.page.type(this.usernameSelector, username);
  }

  async enterPassword(password) {
    await this.page.waitForSelector(this.passwordSelector);
    await this.page.type(this.passwordSelector, password);
  }

  async clickLoginButton() {
    await this.page.waitForSelector(this.loginButtonSelector);
    await this.page.click(this.loginButtonSelector);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.clickLoginButton();
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.page.waitForNavigation({ waitUntil: 'networkidle2' });
  }

  async siteAdmin() {
    const siteAdminPage = new SiteAdminPage(this.page);
    return siteAdminPage;
  }
  
  async getErrorMessage() {
    await this.page.waitForSelector(this.errorMessageSelector);
    return await this.page.$eval(this.errorMessageSelector, el => el.textContent.trim());
  }

  async verifiedAccess() {
    return await this.page.content();
  }
}

export default LoginPage;