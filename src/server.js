const app = require('./app');
const port = process.env.PORT || 3001;

const { sequelize } = require('./models');

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
