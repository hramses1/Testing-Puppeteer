// tests/e2e/login.test.js
import puppeteer from 'puppeteer';
import LoginPage from '../../src/page/common/login/LoginPage';
import { config as configDotenv } from 'dotenv';

configDotenv();
describe("Login tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false }); 
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });
  
  test("should login with valid credentials", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.USER, process.env.PASSWORD);
    //Comprobar que el inicio de sesión fue exitoso
    const pageContent = await loginPage.verifiedAccess();
    expect(pageContent).toContain("Mis estudios");
  }, 1000000);
});