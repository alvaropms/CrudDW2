const express = require('express');
const routesClasse = require('./classe.routes');
const routesAtor = require('./ator.routes');
const routesDiretor = require('./diretor.routes');
import { _routes as routesTitulo } from './titulo.routes';
import { routesLocacao } from './locacao.routes';
import { routesCliente } from './cliente.routes';
const routesItem = require('./item.routes');
const cors =  require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

app.use(routesClasse);
app.use(routesAtor);
app.use(routesDiretor);
app.use(routesTitulo);
app.use(routesItem);
app.use(routesLocacao);
app.use(routesCliente);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000);

export {};