const { Pool } = require("pg");
require("dotenv").config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PW,
  port: Number(process.env.DBPORT),
});
