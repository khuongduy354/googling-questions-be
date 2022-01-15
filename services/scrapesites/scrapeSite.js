const scrapeableGoogling = require("../googling/googling");
const { appendGoogle } = require("../../helper/appendGoogle");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  try {
    let solutionsList = [];
    for (let questionId = 0; questionId < questionsList.length; questionId++) {
      console.log(questionId);
      const question = questionsList[questionId];
      //get links of supported sites
      const scrapeLink = await scrapeableGoogling(question);
      const solution = scrapeLink ? await scrapeHoc247(scrapeLink) : null; //TODO: reimplement this to scrape for all support cases
      if (solution === null) {
        solutionsList.push({
          questionId,
          content: null,
          originalQuestion: questionId,
          searchLink: appendGoogle(question),
        });
      } else {
        //add in some meta data
        solution.questionId = questionId;
        solution.originalQuestion = question;
        solution.scrapeLink = scrapeLink;
        solution.searchLink = appendGoogle(question);
        solutionsList.push(solution);
      }
    }

    return solutionsList;
  } catch (e) {
    console.log(e);
  }
}

module.exports = scrapeSite;
