const express = require("express");
const users = express.Router()


const {allusers,newUser} = require("../controllers/users")



users.get("/",allusers)

users.post("/", newUser);


module.exports = users