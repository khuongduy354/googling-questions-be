const scrapeableGoogling = require("../googling/googling");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  try {
    const solutionsList = [];
    for (const [questionId, question] of questionsList.entries()) {
      const scrapeLink = await scrapeableGoogling(question);
      if (scrapeLink) {
        const solution = await scrapeHoc247(scrapeLink, questionId); //TODO: reimplement this to scrape for all support cases
        solutionsList.push(solution);
      } else {
        solutionsList.push({ questionId });
      }
    }
    return solutionsList;
  } catch (e) {
    console.log(e);
  }
}

module.exports = scrapeSite;
