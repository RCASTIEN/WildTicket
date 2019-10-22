const express = require("express");
const { dbPost, saltRounds, jwtSecret } = require("../conf.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../passport-strategie.js");
