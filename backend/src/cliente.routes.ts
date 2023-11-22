import _express from 'express';
import * as ClienteController from './controllers/cliente.controller';

export const routesCliente = _express.Router();

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Create a new cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: The created cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
routesCliente.post('/cliente', ClienteController.create);

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Delete a cliente
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the cliente to delete
 *     responses:
 *       200:
 *         description: Cliente deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Cliente not found
 *       500:
 *         description: Internal server error
 */
routesCliente.delete('/cliente/:id', ClienteController.deleteItem);

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Update a cliente
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the cliente to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: The updated cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Invalid ID supplied or invalid request body
 *       404:
 *         description: Cliente not found
 *       500:
 *         description: Internal server error
 */
routesCliente.put('/cliente/:id', ClienteController.update);

/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Get a list of clientes
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: The list of clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Internal server error
 */
routesCliente.get('/cliente', ClienteController.list);

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Get a cliente by ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the cliente to get
 *     responses:
 *       200:
 *         description: The cliente data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente not found
 *       500:
 *         description: Internal server error
 */
routesCliente.get('/cliente/:id', ClienteController.get);