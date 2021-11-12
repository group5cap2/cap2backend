const express = require("express");
const musicvideo = express.Router()


const {getAll,getName} = require("../controllers/musicvideo")



musicvideo.get("/",getAll)

musicvideo.get("/name", getName)


module.exports = musicvideo;