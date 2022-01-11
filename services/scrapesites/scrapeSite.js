const scrapeableGoogling = require("../googling/googling");
const scrapeHoc247 = require("./scrapeHoc247");
//return an array of questions-solutions, provided array of questions
async function scrapeSite(questionsList) {
  try {
    const solutionsList = [];
    for (const question of questionsList) {
      const scrapeLink = await scrapeableGoogling(question);
      if (scrapeLink) {
        const solution = await scrapeHoc247(scrapeLink); //TODO: reimplement this to scrape for all support cases
        solutionsList.push(solution);
      } else {
        solutionsList.push("");
      }
    }
    return solutionsList;
  } catch (e) {
    console.log(e);
  }
}

const questionList = [
  "Cảm ứng ở động vật là",
  "Ở động vật có hệ thần kinh dạng ống, cấu trúc của não bộ gồm các bộ phận là:",
  "Ở động vật có hệ thần kinh dạng ống, cấu trúc của não bộ gồm các bộ phận là:",
  "Bất kì một phản xạ nào cũng phải thực hiện nhờ cung phản xạ. Mỗi cung phản xạ gồm các thành phần chủ yếu với đường đi của xung thần kinh là:",
];

module.exports = scrapeSite;
