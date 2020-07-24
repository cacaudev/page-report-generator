"use strict";

import { Page01 } from "./page01";
import { Page02 } from "./page02";

let registeredPages = {};
registeredPages['PAGE_01'] = Page01;
registeredPages['PAGE_02'] = Page02;

class PageFactory {
  constructor(type = null, locale = "en") {
    if (type === null || type === undefined)
      return null;
    return new registeredPages[type](locale);
  }
}

export { PageFactory };