import { Request, Response } from 'express';
import Titulo from '../models/titulo.model';
const connection = require('../db/connection');

export async function create(request: Request, response: Response) {
    try {
        const titulo: Titulo = request.body;

        const [id] = await connection('titulo').insert(titulo).returning('id');

        return response.json({ id });
    } catch (error) {
        return response.status(500).json({ message: 'Error creating title', error });
    }
}

export async function deleteItem(request: Request, response: Response) {
    try {
        const { id } = request.params;

        await connection('titulo').where('id', id).delete();

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: 'Error deleting title', error });
    }
}

export async function update(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const titulo: Titulo = request.body;
        titulo.id = Number(id);

        await connection('titulo').where('id', id).update(titulo);

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ message: 'Error updating title', error });
    }
}

export async function list(request: Request, response: Response) {
    try {
        const titulos = await connection('titulo').select('*');

        return response.json(titulos);
    } catch (error) {
        return response.status(500).json({ message: 'Error listing titles', error });
    }
}

export async function get(request: Request, response: Response) {
    try {
        const { id } = request.params;

        const titulo = await connection('titulo').where('id', id).first();

        if (!titulo) {
            return response.status(404).json({ message: 'Title not found' });
        }

        return response.json(titulo);
    } catch (error) {
        return response.status(500).json({ message: 'Error getting title', error });
    }
}