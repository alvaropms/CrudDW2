import { Request, Response } from 'express';
import Item from '../models/item.model';
const connection = require('../db/connection');

module.exports = {
    async create(request: Request, response: Response) {
        try {
            const item: Item = request.body;
    
            const [id] = await connection('item').insert(item).returning('id');
    
            return response.json({ id });
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error creating item', error });
        }
    },
    
    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
    
            await connection('item').where('id', id).delete();
    
            return response.status(204).send();
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error deleting item', error });
        }
    },
    
    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const item: Item = request.body;
            item.id = Number(id);
    
            await connection('item').where('id', id).update(item);
    
            return response.status(204).send();
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error updating item', error });
        }
    },
    
    async list(request: Request, response: Response) {
        try {
            const itens = await connection('item').select('*');
    
            return response.json(itens);
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error listing items', error });
        }
    },
    
    async get(request: Request, response: Response) {
        try {
            const { id } = request.params;
    
            const item = await connection('item').where('id', id).first();
    
            if (!item) {
                return response.status(404).json({ message: 'Item not found' });
            }
    
            return response.json(item);
        } catch (error) { console.log(error);
            return response.status(500).json({ message: 'Error getting item', error });
        }
    }
}