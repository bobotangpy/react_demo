// Update with your config settings.

require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_URL,
      // user: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations/20200806183232_create-tables"
    },
    seeds: {
      directory: './seeds',
    },
    ssl: true
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_URL,
      // user: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations/20200806183232_create-tables"
    },
    seeds: {
      directory: './seeds',
    },
    ssl: true
  }
};
