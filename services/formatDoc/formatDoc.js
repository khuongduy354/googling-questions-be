const textract = require("textract");
function questionSeparator(questionsKeyword, docxStr) {
  questionsKeyword = questionsKeyword.toLowerCase();
  docxStr = docxStr.toLowerCase();
  const questions = docxStr.split(questionsKeyword);
  questions.shift();
  return questions;
}

function appendGoogle(inputStr) {
  const googleLink = "https://google.com/search?q=";
  return googleLink + inputStr;
}
function formatDoc(buffer, keyword) {
  return new Promise((resolve, reject) =>
    textract.fromBufferWithMime(
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      buffer,
      (err, text) => {
        if (err) {
          reject(err);
        }
        let searchList = questionSeparator(keyword, text);
        if (searchList.length !== 0) {
          searchList = searchList.map((el) => appendGoogle(el));
        }
        resolve(searchList);
      }
    )
  );
}
module.exports = formatDoc;
