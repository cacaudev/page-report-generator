"use strict";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

class Page {
  constructor(locale = "en") {
    this.templateEngine = handlebars;
    this.runTimeTemplate = null;
    this.htmlContent = null;
    this.baseLayout = null;
    this.locale = locale;
  }

  getHTMLContent() {
    return this.htmlContent;
  }

  registerDataInsertHelper(eventName, helperFunction) {
    this.templateEngine.registerHelper(eventName, helperFunction);
    return;
  }

  setTemplateLayout({ filePath }) {
    this.layout = fs.readFileSync(
      path.resolve(__dirname, filePath),
      { encoding: "utf-8" }
    );
    return;
  }

  registerLayout(layoutName) {
    const templateBase = this.templateEngine.compile(
      fs.readFileSync(
        path.resolve(__dirname, `../views/layouts/${layoutName}.hbs`),
        { encoding: "utf-8" }
      )
    );
    this.templateEngine.registerPartial(layoutName, templateBase);
    return;
  };

  registerPartial(partialName) {
    const templatePartial = this.templateEngine.compile(
      fs.readFileSync(
        path.resolve(__dirname, `../views/partials/${partialName}.hbs`),
        { encoding: "utf-8" }
      )
    );
    this.templateEngine.registerPartial(partialName, templatePartial);
    return;
  }

  compileDataOnTemplate(dataToInsert = null) {
    if (this.layout != null)
      this.runTimeTemplate = this.templateEngine.compile(this.layout);
    this.htmlContent = this.runTimeTemplate(dataToInsert);
  }
}

export { Page };
