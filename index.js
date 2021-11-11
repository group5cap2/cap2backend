const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");
const iunesApiSearsh = require("itunes-api-search");
const itunes = require("./routers/routes/all");

require("dotenv");
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 5500;

// Midllware
app.use(express.json());
app.use(helmet());
morgan("tiny");

// get api data
let data = [];
const getData = async () => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=all")
    .then((res) => {
      data = res.data.results;
    });
};
getData();

app.use("/all", itunes);


module.exports = data;
// app.use("/audioBook", allaudioBookRouter)

app.listen(port, (req, res) => {
  console.log(`server run on port ${port}`);
});
