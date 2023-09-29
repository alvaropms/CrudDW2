import { Request, Response } from 'express';
import Diretor from '../models/diretor.model';
const connection = require('../db/connection');

module.exports = {
  async create(request: Request, response: Response) {
    const diretor: Diretor = request.body;

    const [id] = await connection('diretor').insert(diretor).returning('id');

    return response.json({ id });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await connection('diretor').where('id', id).delete();

    return response.status(204).send();
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const diretor: Diretor = request.body;
    diretor.id = Number(id);

    await connection('diretor').where('id', id).update(diretor);

    return response.status(204).send();
  },

  async list(request: Request, response: Response) {
    const diretores = await connection('diretor').select('*');

    return response.json(diretores);
  },

  async get(request: Request, response: Response) {
    const { id } = request.params;

    const diretor = await connection('diretor').where('id', id).first();

    return response.json(diretor);
  }
}