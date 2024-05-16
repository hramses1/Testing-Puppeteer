const puppeteer = require('puppeteer');
const LoginPage = require('../page/LoginPage');

describe('Login tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should login with valid credentials', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('validUsername', 'validPassword');

    // Assert that the login was successful
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Dashboard');
  });

  test('should not login with invalid credentials', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('invalidUsername', 'invalidPassword');

    // Assert that the login failed
    const errorMessage = await page.$eval('#error', el => el.textContent);
    expect(errorMessage).toBe('Invalid username or password');
  });
});