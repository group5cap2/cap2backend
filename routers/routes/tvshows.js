const express = require("express");
const tvShows = express.Router()


const {getAll,getName,searchTvShow} = require("../controllers/tvshows")



tvShows.get("/",getAll)

tvShows.get("/name", getName)
tvShows.get("/search/:term", searchTvShow)


module.exports = tvShows;