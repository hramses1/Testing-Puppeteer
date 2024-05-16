// tests/e2e/login.test.js

const puppeteer = require('puppeteer');
const LoginPage = require('../pageObjects/LoginPage');

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
    await loginPage.login('validUser', 'validPassword');

    // Assert that the login was successful
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Dashboard');
  });

  test('should show error message with invalid credentials', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('invalidUser', 'invalidPassword');

    // Assert that the login failed
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe('Invalid username or password');
  });
});
