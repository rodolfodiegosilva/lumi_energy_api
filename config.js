require('dotenv').config();

module.exports = {
    development: {
      username: "postgres",
      password: "root",
      database: "lumi_energy",
      host: "127.0.0.1",
      dialect: "postgres"
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
  