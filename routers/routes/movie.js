const express = require("express");
const movies = express.Router()


const {getAll,getName , searchMovie} = require("../controllers/movie")



movies.get("/",getAll)

movies.get("/name", getName)
movies.get("/search/:term", searchMovie)


module.exports = movies;