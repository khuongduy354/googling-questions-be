const scrapeableGoogling = require("../googling/googling");
const { appendGoogle } = require("../../helper/appendGoogle");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  let solutionsList = [];
  for (let questionId = 0; questionId < questionsList.length; questionId++) {
    const question = questionsList[questionId];
    //get links of supported sites
    const scrapeLink = await scrapeableGoogling(question); //TODO: reimplement to get an array of links instead of 1
    const solution = scrapeLink
      ? await scrapeHoc247(scrapeLink, questionId)
      : null; //TODO: reimplement this to scrape for all supported sites instead of 1
    if (solution) {
      //add in some meta data
      solution.questionId = questionId;
      solution.originalQuestion = question;
      solution.scrapeLink = scrapeLink;
      solution.searchLink = appendGoogle(question);
      solutionsList.push(solution);
    } else {
      solutionsList.push({
        questionId,
        content: null,
        originalQuestion: questionId,
        searchLink: appendGoogle(question),
      });
    }
  }
  console.log(solutionsList);
  return solutionsList;
}

module.exports = scrapeSite;
