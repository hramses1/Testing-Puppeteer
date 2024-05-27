export class RestoreCoursePage {
    constructor(page) {
        this.page = page;
        this.siteAdminSelector = '[data-key="siteadminnode"]';
        this.fileInputSelector = 'class="dndupload-arrow d-flex"';
        this.dropdownButtonSelector = '[data-toggle="dropdown"]';
        this.errorMessageSelector = "#error";
        this.coursesSelector = '[data-key="courses"]'
        this.restoreCourseSelector = '.col-sm-9 .list-unstyled li a';
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
        const elements = await this.page.$$(this.restoreCourseSelector, { visible: true });
        // Verifica que el tercer elemento existe y haz clic en él
        if (elements.length >= 2) {
            await elements[1].click(); // Índice 2 porque es el tercer elemento (0-based index)
            console.log('Click realizado en el tercer enlace');
        } else {
            console.log('No hay suficientes enlaces en la lista');
        }
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
