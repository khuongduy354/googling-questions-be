const puppeteer = require("puppeteer");
const { appendGoogle } = require("../../helper/appendGoogle");

//google, return scrapeable links
async function scrapeableGoogling(searchContent) {
  try {
    const linkList = await googling(appendGoogle(searchContent));
    for (const link of linkList) {
      if (link.includes("https://hoc247.net")) {
        //TODO: make a separate list to manage scrape supported sites
        return link;
      }
    }
    return "";
  } catch (e) {
    return null;
  }
}

//google , return links
async function googling(searchContent) {
  try {
    const linkList = [];
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(searchContent);

    await page.waitForSelector("#search .g");
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
module.exports = scrapeableGoogling;
