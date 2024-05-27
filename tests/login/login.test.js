import puppeteer from 'puppeteer';
import LoginPage from '../../src/page/common/login/LoginPage';
import { config as configDotenv } from 'dotenv';

configDotenv();

describe('Login tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should login with valid credentials', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    const user = {
      username: process.env.USER,
      password: process.env.PASSWORD
    };
    await loginPage.login(user);
    // Verificar el contenido de la página después del login
    const pageContent = await loginPage.verifiedAccess();
    expect(pageContent).toContain('Mis estudios'); // Cambia esto por el contenido que esperas después del login
  }, 1000000);
});
