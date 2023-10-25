const _express = require('express');
const AtorController = require('./controllers/ator.controller');

const _routes = _express.Router();

/**
 * @swagger
 * /ator:
 *   post:
 *     summary: Cria um novo ator
 *     responses:
 *       200:
 *         description: Ator criado com sucesso
 */
_routes.post('/ator', AtorController.create);

/**
 * @swagger
 * /ator/{id}:
 *   delete:
 *     summary: Exclui um ator pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do ator a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ator excluído com sucesso
 */
_routes.delete('/ator/:id', AtorController.delete);

/**
 * @swagger
 * /ator/{id}:
 *   put:
 *     summary: Atualiza um ator pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do ator a ser atualizado
 *         schema:
 *           type: string
  *     requestBody:
 *       description: Objeto JSON representando o ator a ser atualizado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ator'
 *     responses:
 *       200:
 *         description: Ator atualizado com sucesso
 */
_routes.put('/ator/:id', AtorController.update);

/**
 * @swagger
 * /ator:
 *   get:
 *     summary: Retorna todos os atores
 *     responses:
 *       200:
 *         description: Lista de atores
 */
_routes.get('/ator', AtorController.list);

/**
 * @swagger
 * /ator/{id}:
 *   get:
 *     summary: Retorna um ator pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do ator a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do ator obtidos com sucesso
 */
_routes.get('/ator/:id', AtorController.get);

module.exports = _routes;

export {};