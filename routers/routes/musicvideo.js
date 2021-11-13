const express = require("express");
const musicvideo = express.Router()


const {getAll,getName, searchMusicVideo} = require("../controllers/musicvideo")



musicvideo.get("/",getAll)

musicvideo.get("/name", getName)
musicvideo.get("/search/:term", searchMusicVideo)



module.exports = musicvideo;