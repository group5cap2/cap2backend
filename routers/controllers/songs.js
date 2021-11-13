const axios = require("axios");
const itunesApiSearch = require("itunes-api-search");

let data = [];

const getData = async () => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((res) => {
      data = res.data.results;
    });
};
getData();

const getName = (req, res) => {
  const { artistName } = req.query;
  const found = data.filter((item) => item.artistName === artistName);
  res.status(200).json(found);
};

const getAll = (req, res) => {
  res.status(200).json(data);
};

const searchSong = (req, res) => {
  const term = req.params.term;
  let result = {};
  itunesApiSearch
    .search(
      term,
      {
        limit: 5,
      },
      function (err, res) {
        if (err) {
          res.status(400).json(err);
          return;
        }
        result = res;
        console.log(result);
      }
    )
    .then(() => {
      res.status(201).json(result);
    });
};
module.exports = {
  getAll,
  getName,
  searchSong,
};
