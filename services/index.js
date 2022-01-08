const scrapeableGoogling = require("./googling/googling");
const scrapeHoc247 = require("./scrapesites/scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  const solutionsList = [];
  for (const question of questionsList) {
    const scrapeLink = await scrapeableGoogling(question);
    const { options, correct, explain } = await scrapeHoc247(scrapeLink); //TODO: reimplement this to scrape for all support cases
    solutionsList.push({ options, correct, explain });
  }
  return solutionsList;
}
module.exports = scrapeSite;
