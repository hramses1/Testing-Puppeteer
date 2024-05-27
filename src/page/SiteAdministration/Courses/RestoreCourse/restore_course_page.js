import { setTimeout } from "node:timers/promises";

export class RestoreCoursePage {
  constructor(page) {
    this.page = page;
    this.siteAdminSelector = '[data-key="siteadminnode"]';
    this.dropAreaSelector = '[name="backupfile"]';
    this.dropdownButtonSelector = '[data-toggle="dropdown"]';
    this.errorMessageSelector = "#error";
    this.coursesSelector = '[data-key="courses"]';
    this.restoreCourseSelector = '.list-unstyled';

    // Selectores adicionales
    this.restoreButtonSelector = '[value="Restaurar"]';
    this.submitButtonSelector = '[type="submit"]';
    this.textInputSelector = '[type="text"]';
    this.restoreCategorySelector = '[for="restore-category-1"]';
    this.continueButtonSelector = '[value="Continuar"]';
    this.finalSubmitButtonSelector = '[name="submitbutton"]';
  }

  async clickSiteAdmin() {
    //await this.page.click(this.dropdownButtonSelector);
    //await this.page.waitForSelector(this.dropdownButtonSelector);
    await this.page.click(this.siteAdminSelector);
  }

  async clickCourses() {
    await this.page.waitForSelector(this.coursesSelector);
    await this.page.click(this.coursesSelector);
  }

  async clickRestoreCourse() {
    // Verifica que el tercer elemento existe y haz clic en él
    await this.page.waitForSelector('a[href="https://betacampus.funiber.org/backup/restorefile.php?contextid=1"]', { visible: true });
    // Hacer clic en el enlace "Restaurar curso"
    await this.page.click('a[href="https://betacampus.funiber.org/backup/restorefile.php?contextid=1"]');
  }

  async uploadFile() {
    await this.page.waitForSelector('[name="backupfilechoose"]', { visible: true });
    await this.page.click('[name="backupfilechoose"]');

    await this.page.waitForSelector('input[type=file]', { visible: true });
    const elementHandle = await this.page.$('input[type=file]');

    await elementHandle.uploadFile('src/data/course-1218-md020-vea.mbz');
    await this.page.click('[class="fp-upload-btn btn-primary btn"]');

    await setTimeout(6000);
  }

  async clickRestoreButton() {
    await this.page.waitForSelector(this.restoreButtonSelector);
    await this.page.click(this.restoreButtonSelector);
  }

  async clickSubmitButton() {
    await this.page.waitForSelector(this.submitButtonSelector);
    await this.page.click(this.submitButtonSelector);
  }

  async typeInTextInput(text) {
    await this.page.waitForSelector(this.textInputSelector);
    await this.page.type(this.textInputSelector, text);
  }

  async clickRestoreCategory() {
    await this.page.waitForSelector(this.restoreCategorySelector);
    await this.page.click(this.restoreCategorySelector);
  }

  async clickContinueButton() {
    await this.page.waitForSelector(this.continueButtonSelector);
    await this.page.click(this.continueButtonSelector);
  }

  async clickFinalSubmitButton() {
    await this.page.waitForSelector(this.finalSubmitButtonSelector);
    await this.page.click(this.finalSubmitButtonSelector);
  }
}

export default RestoreCoursePage;
