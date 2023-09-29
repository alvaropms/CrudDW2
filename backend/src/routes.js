const express = require('express');
const AtorController = require('./controllers/ator.controller');
const DiretorController = require('./controllers/diretor.controller');
const ClasseController = require('./controllers/classe.controller');

const routes = express.Router();

routes.post('/ator', AtorController.create);
routes.delete('/ator/:id', AtorController.delete);
routes.put('/ator/:id', AtorController.update);
routes.get('/ator', AtorController.list);
routes.get('/ator/:id', AtorController.get);

routes.post('/diretor', DiretorController.create);
routes.delete('/diretor/:id', DiretorController.delete);
routes.put('/diretor/:id', DiretorController.update);
routes.get('/diretor', DiretorController.list);
routes.get('/diretor/:id', DiretorController.get);

routes.post('/classe', ClasseController.create);
routes.delete('/classe/:id', ClasseController.delete);
routes.put('/classe/:id', ClasseController.update);
routes.get('/classe', ClasseController.list);
routes.get('/classe/:id', ClasseController.get);

module.exports = routes;