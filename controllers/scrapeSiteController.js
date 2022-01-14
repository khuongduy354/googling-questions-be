const { scrapeSite } = require("../services");
const { formatDoc } = require("../services");
async function scrapeSiteController(req, res) {
  try {
    //format file to array of questions
    const fileBuffer = req.files.file.data;
    const { keyword } = req.body;
    const questionList = await formatDoc(fileBuffer, keyword).catch((e) => {
      throw new Error(e);
    });

    //get scrape results
    const solutionList = await scrapeSite(questionList).catch((e) => {
      throw new Error(e);
    });
    res.status(200).json({ solutionList: solutionList });
  } catch (e) {
    console.log(e);
    res.status(500).json({ errorMessage: "Server error" });
  }
}

module.exports = scrapeSiteController;
