"Cảm ứng ở động vật là khả năng tiếp nhận kích thích và";
const puppeteer = require("puppeteer");
module.exports = async function scrapeHoc247(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const ansList = await page.$(".dstl");
  await ansList.screenshot("");
};
