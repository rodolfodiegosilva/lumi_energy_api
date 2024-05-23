const { sequelize } = require('./src/models');

beforeAll(async () => {
  process.env.NODE_ENV = 'test';  // Garantir que estamos no ambiente de teste
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});
