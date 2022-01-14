const puppeteer = require("puppeteer");
const { appendGoogle } = require("../../helper/appendGoogle");
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
    const browser = await puppeteer.launch({ headless: false });
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
    let options = [];
    for (const ans of ansList) {
      const li = await ans.$$("span");
      let availableIndex = 1;
      if (typeof li[availableIndex] === "undefined") availableIndex = 0;
      const option = await li[availableIndex].evaluate((el) => el.innerText);
      options.push(option);
    }

    // get explain
    let explain;
    const questionAnswer = await page.$$(".loigiai > *");
    if (questionAnswer.length === 0) {
      explain = "";
    } else {
      explain = await questionAnswer[0].evaluate((el) => el.innerText);
    }

    //get correct answer
    await page.waitForSelector("._traloi strong");
    const traloi = await page.$("._traloi strong");
    const _correct = await traloi.evaluate((el) => el.innerText);
    const correct = sentenceToLetter(_correct);

    await browser.close();
    return {
      content: { correct, options, explain },
    };
  } catch (e) {
    return null;
  }
}
module.exports = scrapeHoc247;
