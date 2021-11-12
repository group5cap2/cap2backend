<<<<<<< HEAD
const express = require("express");
const audioBook = express.Router()


const {getAll,getName} = require("../controllers/audiobook")



audioBook.get("/",getAll)

audioBook.get("/name", getName)


module.exports = audioBook;
=======
const express = require("express");
>>>>>>> 2841d5f53b5429e0d668ad7424f7898786e701eb
