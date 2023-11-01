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
        Item: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID do item (opcional)',
            },
            num_serie: {
              type: 'integer',
              description: 'Número de série do item',
            },
            dt_aquisicao: {
              type: 'string',
              format: 'date',
              description: 'Data de aquisição do item',
            },
            tipo_item: {
              type: 'string',
              description: 'Tipo do item',
            },
            titulo_id: {
              type: 'integer',
              description: 'ID do título associado ao item',
            },
          },
          required: ['num_serie', 'dt_aquisicao', 'tipo_item', 'titulo_id'],
        },
        Titulo: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID do título (opcional)',
            },
            nome: {
              type: 'string',
              description: 'Nome do título',
            },
            ano: {
              type: 'integer',
              description: 'Ano do título',
            },
            sinopse: {
              type: 'string',
              description: 'Sinopse do título',
            },
            classe_id: {
              type: 'integer',
              description: 'ID da classe associada ao título',
            },
            diretor_id: {
              type: 'integer',
              description: 'ID do diretor associado ao título',
            },
          },
          required: ['nome', 'ano', 'sinopse', 'classe_id', 'diretor_id'],
        },
      },
    },
  },
  apis: ['./src/*routes.ts'],
};

const _swaggerSpec = swaggerJSDoc(options);

module.exports = _swaggerSpec;
