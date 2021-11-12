const express = require("express");
const tvShows = express.Router()


const {getAll,getName} = require("../controllers/tvshows")



tvShows.get("/",getAll)

tvShows.get("/name", getName)


module.exports = tvShows;