import { Request, Response } from 'express';
import Classe from '../models/classe.model';
const connection = require('../db/connection');

module.exports = {
  async create(request: Request, response: Response) {
    const classe: Classe = request.body;

    const [id] = await connection('classe').insert(classe).returning('id');

    return response.json({ id });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await connection('classe').where('id', id).delete();

    return response.status(204).send();
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const classe: Classe = request.body;
    classe.id = Number(id);

    await connection('classe').where('id', id).update(classe);

    return response.status(204).send();
  },

  async list(request: Request, response: Response) {
    const classes = await connection('classe').select('*');

    return response.json(classes);
  },

  async get(request: Request, response: Response) {
    const { id } = request.params;

    const classe = await connection('classe').where('id', id).first();

    return response.json(classe);
  }
}