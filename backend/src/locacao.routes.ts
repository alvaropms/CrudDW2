import _express from 'express';
import * as LocacaoController from './controllers/locacao.controller';

export const routesLocacao = _express.Router();

/**
 * @swagger
 * /locacao:
 *   post:
 *     summary: Create a new locacao
 *     tags: [Locacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Locacao'
 *     responses:
 *       200:
 *         description: The created locacao
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locacao'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
routesLocacao.post('/locacao', LocacaoController.create);

/**
 * @swagger
 * /locacao/{id}:
 *   delete:
 *     summary: Delete a locacao
 *     tags: [Locacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the locacao to delete
 *     responses:
 *       200:
 *         description: Locacao deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Locacao not found
 *       500:
 *         description: Internal server error
 */
routesLocacao.delete('/locacao/:id', LocacaoController.deleteItem);

/**
 * @swagger
 * /locacao/{id}:
 *   put:
 *     summary: Update a locacao
 *     tags: [Locacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the locacao to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Locacao'
 *     responses:
 *       200:
 *         description: The updated locacao
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locacao'
 *       400:
 *         description: Invalid ID supplied or invalid request body
 *       404:
 *         description: Locacao not found
 *       500:
 *         description: Internal server error
 */
routesLocacao.put('/locacao/:id', LocacaoController.update);

/**
 * @swagger
 * /locacao:
 *   get:
 *     summary: Get a list of locacoes
 *     tags: [Locacao]
 *     responses:
 *       200:
 *         description: The list of locacoes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Locacao'
 *       500:
 *         description: Internal server error
 */
routesLocacao.get('/locacao', LocacaoController.list);

/**
 * @swagger
 * /locacao/{id}:
 *   get:
 *     summary: Get a locacao by ID
 *     tags: [Locacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the locacao to get
 *     responses:
 *       200:
 *         description: The locacao data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locacao'
 *       404:
 *         description: Locacao not found
 *       500:
 *         description: Internal server error
 */
routesLocacao.get('/locacao/:id', LocacaoController.get);

/**
 * @swagger
 * /locacao/{id}:
 *   post:
 *     summary: Return a rented item
 *     tags: [Locacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the locacao to return
 *     responses:
 *       200:
 *         description: Item returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locacao'
 *       404:
 *         description: Locacao not found
 *       500:
 *         description: Internal server error
 */
routesLocacao.post('/locacao/:id', LocacaoController.returnRentedItem);