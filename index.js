const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const scrapeSiteController = require("./controllers/scrapeSiteController");
app.use(cors());
app.use(express.json());

app.post("/scrape-result", scrapeSiteController);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
