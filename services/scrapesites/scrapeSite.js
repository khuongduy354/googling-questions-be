const scrapeableGoogling = require("../googling/googling");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  try {
    const solutionsList = [];
    for (const question of questionsList) {
      const scrapeLink = await scrapeableGoogling(question);
      if (!scrapeLink) return;
      const { options, correct, explain } = await scrapeHoc247(scrapeLink); //TODO: reimplement this to scrape for all support cases
      solutionsList.push({ options, correct, explain });
    }
    return solutionsList;
  } catch (e) {
    console.log(e);
  }
}
const questionList = [
  // "Cảm ứng ở động vật là",
  "Ở động vật có hệ thần kinh dạng ống, cấu trúc của não bộ gồm các bộ phận là:",
];

scrapeSite(questionList).then((data) => console.log(data));

module.exports = scrapeSite;
