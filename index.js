const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const scrapeSiteController = require("./controllers/scrapeSiteController");
const { fileValidation } = require("./middlewares/fileValidation");
const formatDocController = require("./controllers/formatDocController");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use(fileValidation);

app.post("/scrape-result", fileValidation, scrapeSiteController);
app.post("/format-doc", formatDocController);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
