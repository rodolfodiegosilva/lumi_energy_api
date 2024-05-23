require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DATABASE_URL);
module.exports = {
    development: {
      username: process.env.DEV_USER_NAME_DATABASE,
      password: process.env.DEV_PASSWORD_DATABASE,
      database: process.env.DEV_DATABASE,
      host: process.env.DEV_HOST_DATABASE,
      dialect: process.env.DEV_DIALECT_DATABASE
    },
    test: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres'
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres'
    }
  };
  