import { Request, Response } from 'express';
import Item from '../models/item.model';
const connection = require('../db/connection');

module.exports = {
    async create(request: Request, response: Response) {
        const item: Item = request.body;
    
        const [id] = await connection('item').insert(item).returning('id');
    
        return response.json({ id });
    },
    
    async delete(request: Request, response: Response) {
        const { id } = request.params;
    
        await connection('item').where('id', id).delete();
    
        return response.status(204).send();
    },
    
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const item: Item = request.body;
        item.id = Number(id);
    
        await connection('item').where('id', id).update(item);
    
        return response.status(204).send();
    },
    
    async list(request: Request, response: Response) {
        const itens = await connection('item').select('*');
    
        return response.json(itens);
    },
    
    async get(request: Request, response: Response) {
        const { id } = request.params;
    
        const item = await connection('item').where('id', id).first();
    
        return response.json(item);
    }
}