const textract = require("textract");
function formatDoc(docUrl) {
  textract.fromUrl(docUrl, (err, text) => {
    if (err) return console.log(err);
    console.log(text);
  });
}

module.exports = formatDoc;
