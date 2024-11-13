const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASS,
  database: "computer_parts",
  port: 5432,
});
