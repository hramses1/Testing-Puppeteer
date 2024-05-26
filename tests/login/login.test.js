// tests/e2e/login.test.js

const puppeteer = require("puppeteer");
const LoginPage = require("../../src/page/common/login/LoginPage");

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
    await loginPage.login("hector.arismendi", "26812983r");
    //Comprobar que el inicio de sesión fue exitoso
    const pageContent = await loginPage.verifiedAccess();
    expect(pageContent).toContain("Mis estudios");
  }, 1000000);
});
