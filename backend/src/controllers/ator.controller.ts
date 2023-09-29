const connection = require('../db/connection');
import { Request, Response } from 'express';
import Ator from '../models/ator.model';

module.exports = {
     async create(request: Request, response: Response) {
        const ator: Ator = request.body;

        const [id] = await connection('ator').insert(ator).returning('id');

        return response.json(id);
    },


    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await connection('ator').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const ator: Ator = request.body;
        ator.id = Number(id);

        await connection('ator').where('id', id).update(ator);

        return response.status(204).send();
    },

    async list(request: Request, response: Response) {
        const atores = await connection('ator').select('*');

        return response.json(atores);
    },

    async get(request: Request, response: Response) {
        const { id } = request.params;

        const ator = await connection('ator').where('id', id).first();

        return response.json(ator);
    }

}