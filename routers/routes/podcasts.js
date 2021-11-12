const express = require("express");
const podcasts = express.Router()


const {getAll,getName} = require("../controllers/podcasts")



podcasts.get("/",getAll)

podcasts.get("/name", getName)


module.exports = podcasts;