const puppeteer = require("puppeteer");

//google, return scrapeable links
async function scrapeableGoogling(searchContent) {
  const linkList = await googling(searchContent);
  for (const link of linkList) {
    if (link.contains("https://hoc247.net")) {
      //TODO: make a separate list to manage scrape supported sites
      return link;
    }
  }
  return None;
}

//google , return links
async function googling(searchContent) {
  try {
    const linkList = [];
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    const googleURL = "htthttps://www.google.com/search?q=";
    await page.goto(googleURL + searchContent);

    const searchResultEls = await page.$$("#search .g");
    for (const searchResultEl of searchResultEls) {
      const linkEl = await searchResultEl.$("a");
      const link = linkEl.evaluate((el) => el.getAttribute("href"));
      linkList.push(link);
    }
    return linkList;
  } catch (e) {
    console.log(e);
  }
}

module.exports = scrapeableGoogling;
