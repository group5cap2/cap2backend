const express = require("express");
const songs = express.Router()


const {getAll,getName} = require("../controllers/songs")



songs.get("/",getAll)

songs.get("/name", getName)


module.exports = songs;