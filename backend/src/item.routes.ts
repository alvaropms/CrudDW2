const _express = require('express');
const ItemController = require('./controllers/item.controller');

const _routes = _express.Router();

/**
 * @swagger
 * /item:
 *   post:
 *     summary: Create a new item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
_routes.post('/item', ItemController.create);

/**
 * @swagger
 * /item/{id}:
 *   delete:
 *     summary: Delete an item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item was successfully deleted
 */
_routes.delete('/item/:id', ItemController.delete);

/**
 * @swagger
 * /item/{id}:
 *   put:
 *     summary: Update an item
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
_routes.put('/item/:id', ItemController.update);

/**
 * @swagger
 * /item:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
_routes.get('/item', ItemController.list);

/**
 * @swagger
 * /item/{id}:
 *   get:
 *     summary: Get an item by ID
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: A single item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
_routes.get('/item/:id', ItemController.get);

module.exports = _routes;

export {};