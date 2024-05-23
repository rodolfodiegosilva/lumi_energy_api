const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Lumi Energy API',
      version: '1.0.0',
      description: 'API para gerenciamento de faturas de energia elétrica',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./api-doc/swaggerDocs.js'], // Caminho relativo ao arquivo atual
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
