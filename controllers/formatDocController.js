const { questionSeparator } = require("../services/index");
const textract = require("textract");

function appendGoogle(inputStr) {
  const googleLink = "https://google.com/search?q=";
  return googleLink + inputStr;
}
function formatDocController(req, res) {
  if (req.files === null) return res.status(400);
  const file = req.files.file;
  const buffer = file.data;
  textract.fromBufferWithMime(
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    buffer,
    (err, text) => {
      if (err) {
        return console.log(err);
        res.json(400).json({ msg: "cant read file" });
      }
      let searchList = questionSeparator("Câu", text);
      if (searchList.length !== 0) {
        searchList = searchList.map((el) => appendGoogle(el));
      }
      console.log("here");
      console.log(searchList);
      res.status(200).json({ searchList });
    }
  );
}
module.exports = formatDocController;
