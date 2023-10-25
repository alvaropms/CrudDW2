const _express = require('express');
const TituloController = require('./controllers/titulo.controller');

const _routes = _express.Router();

_routes.post('/titulo', TituloController.create);

_routes.delete('/titulo/:id', TituloController.delete);

_routes.put('/titulo/:id', TituloController.update);

_routes.get('/titulo', TituloController.list);

_routes.get('/titulo/:id', TituloController.get);

module.exports = _routes;

export {};