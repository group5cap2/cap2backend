const axios = require("axios");



let data = [];

const getData = async () => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=tvShow")
    .then((res) => {
      data = res.data.results;
    });
};
getData();

const getName = (req, res) => {
    const { artistName} = req.query;
    const found = data.filter((item) =>
     item.artistName === artistName);
    res.status(200).json(found);
  };

  
const getAll = (req, res) => {
    res.status(200).json(data);
  };
  
  module.exports = {
    getAll,
    getName,
  };
