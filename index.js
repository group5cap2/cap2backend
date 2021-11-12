const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");
// const iunesApiSearsh = require("itunes-api-search");
const itunes = require("./routers/routes/all");

const audioBooks= require("./routers/routes/audiobook");
const eBooks= require("./routers/routes/ebooks");
const movies= require("./routers/routes/movie");
const musicvideo= require("./routers/routes/musicvideo");
const podcasts= require("./routers/routes/podcasts");
const songs= require("./routers/routes/songs");
const tvShows= require("./routers/routes/tvshows");
const users= require("./routers/routes/users");



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


app.use("/", itunes);
app.use("/audiobooks", audioBooks);
app.use("/ebooks", eBooks);
app.use("/movies", movies);
app.use("/musicvideo", musicvideo);
app.use("/podcasts", podcasts);
app.use("/songs", songs);
app.use("/tvshows", tvShows);
app.use("/users", users);



module.exports = data;

app.use("/all", itunes);


module.exports = data;



app.listen(port, (req, res) => {
  console.log(`server run on port ${port}`);
});
