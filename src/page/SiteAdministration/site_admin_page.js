import { RestoreCoursePage } from "../SiteAdministration/Courses/RestoreCourse/restore_course_page";

export class SiteAdminPage {
  constructor(page) {
    this.page = page;
  }

  async restoreCourse() {
    const restoreCourses = new RestoreCoursePage(this.page);

    // await restoreCourses.clickSiteAdmin();
    // await restoreCourses.clickCourses();
    // await restoreCourses.clickRestoreCourse();
    await restoreCourses.uploadFile();
    await restoreCourses.clickRestoreButton();
    await restoreCourses.clickSubmitButton();
    await restoreCourses.typeInTextInput('Programas');
    await restoreCourses.clickSubmitButton();
    await restoreCourses.clickRestoreCategory();
    await restoreCourses.clickContinueButton();
    await restoreCourses.clickFinalSubmitButton();
    await restoreCourses.clickFinalSubmitButton();
    await restoreCourses.clickFinalSubmitButton();
    await restoreCourses.clickSubmitButton();
  }
}

export default SiteAdminPage;
