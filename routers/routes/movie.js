const express = require("express");
const movies = express.Router()


const {getAll,getName} = require("../controllers/movie")



movies.get("/",getAll)

movies.get("/name", getName)


module.exports = movies;