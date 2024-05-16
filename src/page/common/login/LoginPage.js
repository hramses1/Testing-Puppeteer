class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameSelector = '#username';
    this.passwordSelector = '#password';
    this.loginButtonSelector = '#loginButton';
  }

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async enterUsername(username) {
    await this.page.type(this.usernameSelector, username);
  }

  async enterPassword(password) {
    await this.page.type(this.passwordSelector, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = LoginPage;