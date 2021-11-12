const express = require("express");
const audioBook = express.Router()


const {getAll,getName} = require("../controllers/audiobook")



audioBook.get("/",getAll)

audioBook.get("/name", getName)


module.exports = audioBook;