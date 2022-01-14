const textract = require("textract");
function questionSeparator(questionsKeyword, docxStr) {
  questionsKeyword = questionsKeyword.toLowerCase();
  docxStr = docxStr.toLowerCase();
  const questions = docxStr.split(questionsKeyword);
  questions.shift();
  return questions;
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
        resolve(searchList);
      }
    )
  );
}
module.exports = formatDoc;
