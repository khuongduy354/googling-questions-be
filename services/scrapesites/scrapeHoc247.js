"Cảm ứng ở động vật là khả năng tiếp nhận kích thích và";
const puppeteer = require("puppeteer");

async function scrapeHoc247(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector("input[value='1']");
  await (await page.$("input[value='1']")).click();

  await page.waitForSelector(".dstl");
  const ansList = await page.$(".dstl");
}
scrapeHoc247("https://hoc247.net/cau-hoi-cam-ung-o-dong-vat-la--qid24113.html");
module.exports = scrapeHoc247;
