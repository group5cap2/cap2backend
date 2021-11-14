const express = require("express");
const users = express.Router()


const {allusers,newUser,checkuser,favorite,delfav} = require("../controllers/users")



users.get("/",allusers)

users.post("/", newUser);

users.post("/loguser",checkuser);
users.post("/favorite",favorite);
users.delete("/favorite",delfav);


module.exports = users