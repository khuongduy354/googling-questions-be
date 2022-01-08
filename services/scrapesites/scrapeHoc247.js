const puppeteer = require("puppeteer");

function sentenceToLetter(sentence) {
  if (sentence.includes("A")) return "A";
  if (sentence.includes("B")) return "B";
  if (sentence.includes("C")) return "C";
  if (sentence.includes("D")) return "D";
  return None;
}
//scrape hoc247 based on URL given, return object of problem datas
async function scrapeHoc247(url) {
  try {
    let options = [];
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(url);

    //click to show result
    await page.waitForSelector("input[value='1']");
    const button = await page.$("input[value='1']");
    await button.click();

    //get all options
    await page.waitForSelector(".dstl > *");
    const ansList = await page.$$(".dstl > *");
    for (const ans of ansList) {
      const li = await ans.$$("span");
      const option = await li[1].evaluate((el) => el.innerText);
    }

    // get explain and correct answer
    const questionAnswer = await page.$$(".loigiai > *");
    const explain = await questionAnswer[0].evaluate((el) => el.innerText);
    const _correct = await questionAnswer[1].evaluate((el) => el.innerText);
    const correct = sentenceToLetter(_correct);
    return { correct, options, explain };
  } catch (e) {
    console.log(e);
  }
}
module.exports = scrapeHoc247;
