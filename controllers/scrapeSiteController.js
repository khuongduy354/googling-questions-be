const { scrapeSite } = require("../services/index");

async function scrapeSiteController(req, res) {
  const { questionList } = res.body;
  const results = await scrapeSite(questionList);
  if (!results) res.status(200).json({ scrapeable: false });
  res.status(200).json({ scrapeable: true, solutionList: results });
}

module.exports = scrapeSiteController;
