const express = require("express");
const itunes = express.Router()


const {getAll,getKind} = require("../controllers/all")



itunes.get("/",getAll)

itunes.get("/type", getKind)


module.exports = itunes