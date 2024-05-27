import puppeteer from 'puppeteer';
import LoginPage from '../../../src/page/common/login/LoginPage';
import { config as configDotenv } from 'dotenv';

configDotenv();
describe("restore course tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("should login with valid credentials and upload a file", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    const user = {
      username: process.env.US,
      password: process.env.PASSWORD
    };
    await loginPage.login(user);
    const siteAdminPage = await loginPage.siteAdmin();
    await siteAdminPage.restoreCourse();
  }, 3000000);
});
