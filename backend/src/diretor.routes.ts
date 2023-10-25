const _express = require('express');
const DiretorController = require('./controllers/diretor.controller');

const _routes = _express.Router();

// Rotas para Diretores

/**
 * @swagger
 * /diretor:
 *   post:
 *     summary: Cria um novo diretor
 *     responses:
 *       200:
 *         description: Diretor criado com sucesso
 */
_routes.post('/diretor', DiretorController.create);

/**
 * @swagger
 * /diretor/{id}:
 *   delete:
 *     summary: Exclui um diretor pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do diretor a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diretor excluído com sucesso
 */
_routes.delete('/diretor/:id', DiretorController.delete);

/**
 * @swagger
 * /diretor/{id}:
 *   put:
 *     summary: Atualiza um diretor pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do diretor a ser atualizado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diretor atualizado com sucesso
 */
_routes.put('/diretor/:id', DiretorController.update);

/**
 * @swagger
 * /diretor:
 *   get:
 *     summary: Retorna todos os diretores
 *     responses:
 *       200:
 *         description: Lista de diretores
 */
_routes.get('/diretor', DiretorController.list);

/**
 * @swagger
 * /diretor/{id}:
 *   get:
 *     summary: Retorna um diretor pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do diretor a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do diretor obtidos com sucesso
 */
_routes.get('/diretor/:id', DiretorController.get);

module.exports = _routes;

export { };
