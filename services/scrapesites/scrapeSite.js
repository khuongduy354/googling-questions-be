const scrapeableGoogling = require("../googling/googling");
const { appendGoogle } = require("../../helper/appendGoogle");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  try {
    let solutionsList = [];
    for (const [questionId, question] of questionsList.entries()) {
      //get links of supported sites
      const scrapeLink = await scrapeableGoogling(question);
      if (scrapeLink) {
        const solution = await scrapeHoc247(scrapeLink, questionId); //TODO: reimplement this to scrape for all support cases
        // if (solution === null) {
        // proceed to scrape different supported sites
        // }

        //add in some meta data
        solution.questionId = questionId;
        solution.originalQuestion = question;
        solution.scrapeLink = scrapeLink;
        solution.searchLink = appendGoogle(question);
        solutionsList.push(solution);
      } else {
        solutionsList.push({
          questionId,
          content: {},
          originalQuestion: questionId,
          searchLink: appendGoogle(question),
        });
      }
    }

    return solutionsList;
  } catch (e) {
    console.log(e);
  }
}

module.exports = scrapeSite;
