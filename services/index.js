const puppeteer = require("puppeteer");
const testUrl =
  "https://www.google.com/search?q=" +
  "Cảm ứng ở động vật là khả năng tiếp nhận kích thích và";

async function scrapeSite(siteName, question) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(testUrl);
  await page.waitForSelector(".g  a");
  const result = await page.$(".g  a");
  await result.click();
}
scrapeSite("s", "s");
module.exports = scrapeSite;
