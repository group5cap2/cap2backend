const fs = require("fs");

let users = [];

fs.readFile("./db/users.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
  }
});

const allusers = (req, res) => {
  res.status(200).json(users);
};

const newUser = (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    passward: req.body.passward,
    favorite: [],
  };
  users.push(user);

  fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
    if (err) {
      res.status(400).json("bad request");
    } else {
      res.status(200).json(users);
    }
  });
};
const checkuser=(req,res)=>{
  const username=req.body.username;
  const passward=req.body.passward;
  let resoult= false;
  users.map(user=>{
    if(user.username===username&&user.passward===passward){
      resoult =true;
    }
  })
  if(resoult)
  {
    res.status(200);
  }else{
    res.json("wrong username/passward compination!");
  }

}




  const favorite = (req, res) => {
    const username=req.body.username;
    const favorite=req.body.favorite;
    users.map((user,i)=>{
       if(user.username==username)
       {
         user.favorite.push(favorite)
       }
    })
    
    fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(users);
      }
    });
  };

  const delfav = (req, res) => {
    const username=req.body.username;
    const favorite=req.body.favorite;
    let id=favorite.trackId;
    users.map((user,index)=>{
       if(user.username==username)
       {
        user.favorite.map((item,i)=>{
            if(item[0].trackId==id)
            {
              user.favorite.splice(i,1);
          
            }
        })
  
       }
    })
    
    fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(users);
      }
    });
  };


module.exports = {
  allusers,
  newUser,
  checkuser,
  favorite,
  delfav
};
