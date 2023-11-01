import { Request, Response } from 'express';
import Diretor from '../models/diretor.model';
const connection = require('../db/connection');

module.exports = {
  async create(request: Request, response: Response) {
    try {
        const diretor: Diretor = request.body;

        const [id] = await connection('diretor').insert(diretor).returning('id');

        return response.json({ id });
    } catch (error) {
        return response.status(500).json({ message: 'Error creating director', error });
    }
},

async delete(request: Request, response: Response) {
    try {
        const { id } = request.params;

        await connection('diretor').where('id', id).delete();

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: 'Error deleting director', error });
    }
},

async update(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const diretor: Diretor = request.body;
        diretor.id = Number(id);

        await connection('diretor').where('id', id).update(diretor);

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: 'Error updating director', error });
    }
},

async list(request: Request, response: Response) {
    try {
        const diretores = await connection('diretor').select('*');

        return response.json(diretores);
    } catch (error) {
        return response.status(500).json({ message: 'Error listing directors', error });
    }
},

async get(request: Request, response: Response) {
    try {
        const { id } = request.params;

        const diretor = await connection('diretor').where('id', id).first();

        if (!diretor) {
            return response.status(404).json({ message: 'Director not found' });
        }

        return response.json(diretor);
    } catch (error) {
        return response.status(500).json({ message: 'Error getting director', error });
    }
}
}