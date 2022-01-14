const { appendGoogle } = require("../helper/appendGoogle");
const { formatDoc } = require("../services");
async function formatDocController(req, res) {
  try {
    const fileBuffer = req.files.file.data;
    const { keyword } = req.body;
    let questionList = await formatDoc(fileBuffer, keyword).catch((e) => {
      throw new Error(e);
    });
    questionList = questionList.map((question) => appendGoogle(question));
    res.status(200).json({ questionList });
  } catch (e) {
    console.log(e);
  }
}
module.exports = formatDocController;
