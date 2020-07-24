
import { PageFactory } from "./classes/pageFactory";

const generateReport01 = () => {
  const title = "Report Page 01";
  const page = new PageFactory("PAGE_01");
  page.generateLayout({ title });

  return {
    title: page.getTitle(),
    contentData: page.getHTMLContent()
  };
};

export { generateReport01 };