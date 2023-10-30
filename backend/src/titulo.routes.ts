import _express from 'express';
import * as TituloController from './controllers/titulo.controller';

export const _routes = _express.Router();

/**
 * @swagger
 * /titulo:
 *   post:
 *     summary: Create a new title
 *     tags: [Titulo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Titulo'
 *     responses:
 *       200:
 *         description: The created title
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Titulo'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
_routes.post('/titulo', TituloController.create);

/**
 * @swagger
 * /titulo/{id}:
 *   delete:
 *     summary: Delete a title by ID
 *     tags: [Titulo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the title to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted title
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Titulo'
 *       404:
 *         description: Title not found
 *       500:
 *         description: Internal server error
 */
_routes.delete('/titulo/:id', TituloController.deleteItem);

/**
 * @swagger
 * /titulo/{id}:
 *   put:
 *     summary: Update a title by ID
 *     tags: [Titulo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the title to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Titulo'
 *     responses:
 *       200:
 *         description: The updated title
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Titulo'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Title not found
 *       500:
 *         description: Internal server error
 */
_routes.put('/titulo/:id', TituloController.update);

/**
 * @swagger
 * /titulo:
 *   get:
 *     summary: Get a list of all titles
 *     tags: [Titulo]
 *     responses:
 *       200:
 *         description: A list of titles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Titulo'
 *       500:
 *         description: Internal server error
 */
_routes.get('/titulo', TituloController.list);

/**
 * @swagger
 * /titulo/{id}:
 *   get:
 *     summary: Get a title by ID
 *     tags: [Titulo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the title to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested title
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Titulo'
 *       404:
 *         description: Title not found
 *       500:
 *         description: Internal server error
 */
_routes.get('/titulo/:id', TituloController.get);