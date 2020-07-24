import { Page } from "./page";

class Page01 extends Page {

  getTitle() {
    return "Page01";
  }

  generateLayout(dataToInsert = null) {
    this.registerPartial("logoBar");
    this.registerPartial("post");
    this.registerPartial("socialMedia");
    this.registerLayout("base");
    this.setTemplateLayout({ filePath: "../views/page.html" });
    this.compileDataOnTemplate(dataToInsert);
  }

};

export { Page01 };