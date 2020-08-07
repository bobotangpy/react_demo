const kneximport = require("knex")
const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile.js");
const knex = kneximport(config[environment]);
console.log(config);

module.exports = knex;
