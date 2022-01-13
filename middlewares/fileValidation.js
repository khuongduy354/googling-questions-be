function fileValidation(req, res, next) {
  if (!"keyword" in req.body) {
    return res.status(400).json({ errorMessage: "No keyword received" });
  }
  if (req.files === null) {
    return res.status(400).json({ errorMessage: "Invalid file type" });
  } else {
    next();
  }
}
module.exports = { fileValidation };
