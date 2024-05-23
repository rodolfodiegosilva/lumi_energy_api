const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { sequelize } = require('./models');
const path = require('path');
const fs = require('fs');
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DATABASE_URL);

// Certifique-se de que a pasta 'uploads' existe
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const app = express();
const port = process.env.PORT || 3001;  

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve arquivos estáticos da pasta uploads

app.use('/api', routes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
