const _express = require('express');
const ItemController = require('./controllers/item.controller');

const _routes = _express.Router();

_routes.post('/item', ItemController.create);

_routes.delete('/item/:id', ItemController.delete);

_routes.put('/item/:id', ItemController.update);

_routes.get('/item', ItemController.list);

_routes.get('/item/:id', ItemController.get);

module.exports = _routes;

export {};