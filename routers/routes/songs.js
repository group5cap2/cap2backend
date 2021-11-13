const express = require("express");
const songs = express.Router();

const { getAll, getName, searchSong } = require("../controllers/songs");

songs.get("/", getAll);

songs.get("/name", getName);

songs.get("/search/:term", searchSong);

module.exports = songs;
