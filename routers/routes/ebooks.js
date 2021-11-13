const express = require("express");
const eBooks = express.Router()


const {getAll,getName ,searchEbooks} = require("../controllers/ebooks")



eBooks.get("/",getAll)

eBooks.get("/name", getName)
eBooks.get("/search/:term", searchEbooks)


module.exports = eBooks;