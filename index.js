const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const scrapeSiteController = require("./controllers/scrapeSiteController");
const formatDocController = require("./controllers/formatDocController");
app.use(cors());
app.use(express.json());

app
  .post("/scrape-result", scrapeSiteController)
  .get("/formatDoc/:docUrl", formatDocController);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
