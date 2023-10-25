const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Sua API Node com Express',
      version: '1.0.0',
      description: 'Documentação da API gerada automaticamente com Swagger',
    },
    basePath: '/',
    components: {
      schemas: {
        Ator: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID do ator (opcional)',
            },
            nome: {
              type: 'string',
              description: 'Nome do ator',
            },
          },
          required: ['nome'],
        },
      },
    },
  },
  apis: ['./src/*routes.ts'],
};

const _swaggerSpec = swaggerJSDoc(options);

module.exports = _swaggerSpec;
