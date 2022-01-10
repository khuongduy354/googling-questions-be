const puppeteer = require("puppeteer");

//google, return scrapeable links
async function scrapeableGoogling(searchContent) {
  try {
    const linkList = await googling(searchContent);
    for (const link of linkList) {
      if (link.includes("https://hoc247.net")) {
        //TODO: make a separate list to manage scrape supported sites
        return link;
      }
    }
    return None;
  } catch (e) {
    console.log(e);
  }
}

//google , return links
async function googling(searchContent) {
  try {
    const linkList = [];
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    const googleURL = "https://www.google.com/search?q=";
    await page.goto(googleURL + searchContent);

    const searchResultEls = await page.$$("#search .g");
    for (const searchResultEl of searchResultEls) {
      const linkEl = await searchResultEl.$("a");
      const link = await linkEl.evaluate((el) => el.getAttribute("href"));
      linkList.push(link);
    }
    await browser.close();
    return linkList;
  } catch (e) {
    console.log(e);
  }
}
const testSearchContent = "Cảm ứng ở động vật là";
const resultLink =
  "https://hoc247.net/cau-hoi-cam-ung-o-dong-vat-la--qid24113.html";
scrapeableGoogling(testSearchContent).then((data) => console.log(data));
module.exports = scrapeableGoogling;
