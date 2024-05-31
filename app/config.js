const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: "jwtTokenSecret",
  jwtExpiration: "24h",
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
