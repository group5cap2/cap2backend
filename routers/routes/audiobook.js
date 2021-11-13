
const express = require("express");
const audioBook = express.Router()


const {getAll,getName, searchAudioBook} = require("../controllers/audiobook")



audioBook.get("/",getAll)

audioBook.get("/name", getName)
audioBook.get("/search/:term", searchAudioBook)


module.exports = audioBook;
