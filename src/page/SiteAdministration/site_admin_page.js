const RestoreCoursePage = require("../SiteAdministration/Courses/RestoreCourse/restore_course_page");
const path = require('path');
class SiteAdminPage {
    constructor(page) {
        this.page = page;
    }
    async restoreCourse() {
        const restoreCourses = new RestoreCoursePage(this.page);
        await restoreCourses.clickSiteAdmin();
        await restoreCourses.clickCourses();
        await restoreCourses.clickRestoreCourse();

        const filePath = path.relative(process.cwd(), "path/to/your/file.ext");
        await restoreCourses.uploadFile(filePath);
    }
}

module.exports = SiteAdminPage;