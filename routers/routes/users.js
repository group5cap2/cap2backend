const express = require("express");
const users = express.Router()


const {allusers,newUser,checkuser,favorite} = require("../controllers/users")



users.get("/",allusers)

users.post("/", newUser);

users.post("/loguser",checkuser);
users.post("/favorite",favorite);


module.exports = users