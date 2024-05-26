const puppeteer = require("puppeteer");
const LoginPage = require("../../../src/page/common/login/LoginPage");
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
    await loginPage.login("hector.arismendi", "26812983r");
    const siteAdminPage = await loginPage.siteAdmin();
    await siteAdminPage.restoreCourse();
  }, 30000);
});
