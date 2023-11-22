import { Request, Response } from 'express';
import Classe from '../models/classe.model';
const connection = require('../db/connection');

module.exports = {
  async create(request: Request, response: Response) {
    try {
        const classe: Classe = request.body;

        const [id] = await connection('classe').insert(classe).returning('id');

        return response.json({ id });
    } catch (error) { console.log(error);
        return response.status(500).json({ message: 'Error creating class', error });
    }
},

async delete(request: Request, response: Response) {
    try {
        const { id } = request.params;

        await connection('classe').where('id', id).delete();

        return response.status(204).send();
    } catch (error) { console.log(error);
        return response.status(500).json({ message: 'Error deleting class', error });
    }
},

async update(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const classe: Classe = request.body;
        classe.id = Number(id);

        await connection('classe').where('id', id).update(classe);

        return response.status(204).send();
    } catch (error) { console.log(error);
        return response.status(500).json({ message: 'Error updating class', error });
    }
},

async list(request: Request, response: Response) {
    try {
        const classes = await connection('classe').select('*');

        return response.json(classes);
    } catch (error) { console.log(error);
        return response.status(500).json({ message: 'Error listing classes', error });
    }
},

async get(request: Request, response: Response) {
    try {
        const { id } = request.params;

        const classe = await connection('classe').where('id', id).first();

        if (!classe) {
            return response.status(404).json({ message: 'Class not found' });
        }

        return response.json(classe);
    } catch (error) { console.log(error);
        return response.status(500).json({ message: 'Error getting class', error });
    }
}
}