const { formatDoc } = require("../services/index");
function formatDocController(req, res) {
  const { docUrl } = req.params;
  formatDoc(docUrl);
  res.status(200).send("Ok");
}
module.exports = formatDocController;
