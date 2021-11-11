const axios = require("axios");

let data = [];

const getData = async () => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=all")
    .then((res) => {
      data = res.data.results;
    });
};
getData();

const getKind = (req, res) => {
  const { kind } = req.query;
  const found = data.filter((item) => (item.kind = kind));
  res.status(200).json(found);
};

const getAll = (req, res) => {
  res.status(200).json(data);
};

module.exports = {
  getAll,
  getKind
};
