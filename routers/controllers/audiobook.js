routers
const axios = require("axios");



let data = [];

const getData = async () => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=audiobook")
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
=======
const 





// const fs = require("fs");
// const express = require("express");
// const app = express();

// const audioBookRouter = express.Router();

// let audioBook = [];

// fs.readFile("./db/audiobok.json", (err, data) => {
//   if (err) {
//     console.log(err);
//     console.log(data);
//     return err;
//   } else {
//     audioBook = JSON.parse(data.toString());
//   }
// });

// app.get("/audioBook", (req,res)=>{
//     const all = req.body
//     res.status(200).json(all)
// })

 main

