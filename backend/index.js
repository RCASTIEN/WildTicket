const express = require("express");
const app = express();
const PORT = 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

// --------------------- USE MODULES

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// --------------------- ROUTES

app.get("/", (request, response) => {
  response.send(
    "Bienvenue sur le WildTicket_Version2 by Marine SAUSSÉ & Rémi CASTIEN"
  );
});

//-------------------------------------------------- SIGNUP
app.post("/inscription", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (!email || !username || !password) {
    res.status(401).send({ error: "Tous les champs sont obligatoires." });
  } else {
    db.query(
      `SELECT email FROM user WHERE email = ?`,
      [email],
      (err, results) => {
        if (err) {
          res.status(500).send("Une erreur inconnue s'est produite.");
        } else if (results.length) {
          res.status(200).send({
            error: "L'adresse email existe déjà."
          });
        } else {
          bcrypt.hash(password, parseInt(saltRounds), (err, hash) => {
            if (err) {
              return res
                .status(400)
                .send("Erreur lors de la création du compte.");
            }
            const passwordHash = hash;

            db.query(
              `INSERT INTO user (email, password, pseudo) values (?,?,?)`,
              [email, passwordHash, username],
              (err, results) => {
                if (err) {
                  res
                    .status(500)
                    .send("Erreur lors de la création du compte !");
                } else {
                  const userInfo = {
                    id: results.insertId,
                    username: username,
                    email: email
                  };
                  res.status(200).send({
                    userInfo,
                    token: jwt.sign(JSON.stringify(userInfo), jwtSecret),
                    message: "Le compte a bien été créé."
                  });
                }
              }
            );
          });
        }
      }
    );
  }
});

//-------------------------------------------------- LOGIN/REGISTRE
app.post("/connexion", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        message: "Authentication failed.",
        user,
        err,
        info
      });
    }
    req.login(user, { session: false }, loginErr => {
      if (loginErr) {
        return res.status(401).json({
          message: "Authentication failed.",
          user,
          loginErr
        });
      }
      user.password = undefined;
      const userInfo = user;
      const token = jwt.sign(JSON.stringify(user), jwtSecret);
      res.json({ userInfo, token }).status(200);
    });
  })(req, res);
});

app.listen(PORT, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});

//-------------------------------------------------- ADD NEW FAVORITE TO DATABASE

// app.post(
//   "/api/favorite/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const formData = req.body;
//     db.query("INSERT INTO `favorite` SET ?", formData, (err, results) => {
//       if (err) {
//         res.status(500).send("Erreur lors de l'ajout du favorite");
//       } else {
//         res.json(results);
//       }
//     });
//   }
// );
