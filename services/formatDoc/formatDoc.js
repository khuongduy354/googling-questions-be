const textract = require("textract");
function questionSeparator(questionsKeyword, docxStr) {
  questionsKeyword = questionsKeyword.toLowerCase().trim();
  docxStr = docxStr.toLowerCase();
  // const pattern = /câu \d/;
  const pattern = new RegExp(`${questionsKeyword} [0-9]{1,3}`);
  const questions = docxStr.split(pattern);
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
