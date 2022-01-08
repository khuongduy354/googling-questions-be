const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post("/scrape-result", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
