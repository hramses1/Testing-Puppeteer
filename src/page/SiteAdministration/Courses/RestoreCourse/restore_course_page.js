export class RestoreCoursePage {
    constructor(page) {
        this.page = page;
        this.siteAdminSelector = '[data-key="siteadminnode"]';
        this.fileInputSelector = 'class="dndupload-arrow d-flex"';
        this.dropdownButtonSelector = '[data-toggle="dropdown"]';
        this.errorMessageSelector = "#error";
        this.coursesSelector = '[data-key="courses"]'
        this.restoreCourseSelector = '.col-sm-9'
    }

    async clickSiteAdmin() {
        await this.page.click(this.dropdownButtonSelector);
        await this.page.waitForSelector(this.dropdownButtonSelector);
        await this.page.click(this.siteAdminSelector);
    }

    async clickCourses() {        
        await this.page.waitForSelector(this.coursesSelector)
        await this.page.click(this.coursesSelector)
    }    
    
    async clickRestoreCourse() {        
        await this.page.waitForSelector(this.restoreCourseSelector);
        const elements = await this.page.$$(this.restoreCourseSelector);
        await elements[3].click();
    }

    async uploadFile(filePath) {
        const [fileChooser] = await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click(this.fileInputSelector), // Abre el diálogo de selección de archivo
        ]);
        await fileChooser.accept([filePath]);
    }
}

export default RestoreCoursePage;
