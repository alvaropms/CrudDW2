const _express = require('express');
const ClasseController = require('./controllers/classe.controller');

const _routes = _express.Router();

// Rotas para Classes

/**
 * @swagger
 * /classe:
 *   post:
 *     summary: Cria uma nova classe
 *     responses:
 *       200:
 *         description: Classe criada com sucesso
 */
_routes.post('/classe', ClasseController.create);

/**
 * @swagger
 * /classe/{id}:
 *   delete:
 *     summary: Exclui uma classe pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da classe a ser excluída
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Classe excluída com sucesso
 */
_routes.delete('/classe/:id', ClasseController.delete);

/**
 * @swagger
 * /classe/{id}:
 *   put:
 *     summary: Atualiza uma classe pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da classe a ser atualizada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Classe atualizada com sucesso
 */
_routes.put('/classe/:id', ClasseController.update);

/**
 * @swagger
 * /classe:
 *   get:
 *     summary: Retorna todas as classes
 *     responses:
 *       200:
 *         description: Lista de classes
 */
_routes.get('/classe', ClasseController.list);

/**
 * @swagger
 * /classe/{id}:
 *   get:
 *     summary: Retorna uma classe pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da classe a ser obtida
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes da classe obtidos com sucesso
 */
_routes.get('/classe/:id', ClasseController.get);


module.exports = _routes;

export {};