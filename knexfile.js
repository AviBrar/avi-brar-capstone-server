require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
};
