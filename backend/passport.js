const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { dbPort, jwtSecret } = require("./conf.js");
const bcrypt = require("bcrypt");

//======================================================= LOGIN STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      dbPort.query(
        `SELECT * FROM user WHERE email = ?`,
        [email, password],
        (err, results) => {
          let user;
          if (results) {
            user = results[0];
          }

          if (err || user === undefined) {
            return done(null, false);
          }
          bcrypt.compare(password, user.password, (errBcrypt, result) => {
            if (errBcrypt) return done(errBcrypt);
            if (!result) {
              return done(null, false);
            }
            return done(null, results[0]);
          });
        }
      );
    }
  )
);

//======================================================= JWT STRATEGY
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);
