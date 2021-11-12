const express = require("express");
const eBooks = express.Router()


const {getAll,getName} = require("../controllers/ebooks")



eBooks.get("/",getAll)

eBooks.get("/name", getName)


module.exports = eBooks;