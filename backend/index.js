const express = require("express");
const app = express();
const PORT = 5000;
const { dbPort, saltRounds, jwtSecret } = require("./conf.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("./passport.js");

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

app.post("/api/inscription", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(401).send({ error: "Tous les champs sont obligatoires." });
  } else {
    dbPort.query(
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

            dbPort.query(
              `INSERT INTO user (email, password) values (?,?)`,
              [email, passwordHash],
              (err, results) => {
                if (err) {
                  res
                    .status(500)
                    .send("Erreur lors de la création du compte !");
                } else {
                  const userInfo = {
                    id: results.insertId,
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

app.post("/api/connexion", (req, res) => {
  passport.authenticate("local", { session: false }, (err, email, info) => {
    if (err || !email) {
      return res.status(401).json({
        message: "Authentication failed.",
        email,
        err,
        info
      });
    }
    req.login(email, { session: false }, loginErr => {
      if (loginErr) {
        return res.status(401).json({
          message: "Authentication failed.",
          email,
          loginErr
        });
      }
      email.password = undefined;
      const emailInfo = email;
      const token = jwt.sign(JSON.stringify(email), jwtSecret);
      res.json({ emailInfo, token }).status(200);
    });
  })(req, res);
});

app.get("/api/favorites/user/:id", (req, res) => {
  const id = req.params.id;
  dbPort.query(
    "SELECT * FROM `favorite` WHERE id_user =  ? ",
    id,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la recherche des favori");
      } else {
        res.json(results);
      }
    }
  );
});

//-------------------------------------------------- ADD NEW FAVORITE TO DATABASE

app.post("/api/favorites", (req, res) => {
  const id_user = req.body.id_user;
  const id_artist = req.body.id_artist;
  dbPort.query(
    `INSERT INTO favorite (id_user, id_artist) VALUES (?,?)`,
    [id_user, id_artist],
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout du favori");
      } else {
        res.json(results);
      }
    }
  );
});

//-------------------------------------------------- DELETE FAVORITE BY ID IN DATABASE

app.delete("/api/favorites/:id", (req, res) => {
  const id = req.params.id;
  dbPort.query(
    `DELETE FROM favorite WHERE id_favorite = ?`,
    id,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de suppression d'un favori");
      } else {
        res.send("Favori supprimé");
      }
    }
  );
});

app.listen(PORT, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
