import { RestoreCoursePage } from "../SiteAdministration/Courses/RestoreCourse/restore_course_page";
import path from "path";
export class SiteAdminPage {
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

export default SiteAdminPage;