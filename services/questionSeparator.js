function questionSeparator(questionsKeyword, docxStr) {
  questionsKeyword = questionsKeyword.toLowerCase();
  docxStr = docxStr.toLowerCase();
  const questions = docxStr.split(questionsKeyword);
  questions.shift();
  return questions;
}

module.exports = questionSeparator;
