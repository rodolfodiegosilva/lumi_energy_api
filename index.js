const app = require('./src/app');
const { sequelize } = require('./src/models');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./api-doc/swaggerConfig');
const port = process.env.PORT || 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
