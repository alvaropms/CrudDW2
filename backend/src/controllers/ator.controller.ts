const connection = require('../db/connection');
import { Request, Response } from 'express';
import Ator from '../models/ator.model';

module.exports = {
     async create(request: Request, response: Response) {
        const ator: Ator = request.body;

        try {
            const [id] = await connection('ator').insert(ator).returning('id');
    
            return response.json(id);
        } catch (error) { console.log(error);
            return response.status(500).json(error);
        }

    },


    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
    
            await connection('ator').where('id', id).delete();
    
            return response.status(204).send();
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error deleting actor', error });
        }
    },
    
    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const ator: Ator = request.body;
            ator.id = Number(id);
    
            await connection('ator').where('id', id).update(ator);
    
            return response.status(204).send();
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error updating actor', error });
        }
    },
    
    async list(request: Request, response: Response) {
        try {
            const atores = await connection('ator').select('*');
    
            return response.json(atores);
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error listing actors', error });
        }
    },
    
    async get(request: Request, response: Response) {
        try {
            const { id } = request.params;
    
            const ator = await connection('ator').where('id', id).first();
    
            if (!ator) {
                return response.status(404).json({ message: 'Actor not found' });
            }
    
            return response.json(ator);
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error getting actor', error });
        }
    }
}