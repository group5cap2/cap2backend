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




//   const favorite = (req, res) => {
//     const { id } = req.params;
//     const { name, isDel, isFav } = req.body;
//     let check = false;

//     movies.forEach((movie) => {
//       if (movie.id == id) {
//         if (name != undefined) movie.name = name;
//         if (isDel != undefined) movie.isDel = isDel;
//         if (isFav != undefined) movie.isFav = isFav;
//         check = true;
//       }
//     });

//     if (check) {
//       fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
//         if (err) {
//           res.status(400).json("bad request");
//         } else {
//           res.status(200).json(movies);
//         }
//       });
//     } else {
//       res.status(404).json("movie not found");
//     }
//   };

module.exports = {
  allusers,
  newUser,
};
