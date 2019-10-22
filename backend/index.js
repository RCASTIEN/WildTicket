const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const { dbPort } = require("./conf.js");

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

app.listen(dbPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${dbPort}`);
});
