import { Request, Response } from 'express';
import Titulo from '../models/titulo.model';
const connection = require('../db/connection');

export async function create(request: Request, response: Response) {
    try {
        const titulo: Titulo = request.body;
        const { atores_id, ...tituloDb } = titulo;

        const [id] = await connection('titulo').insert(tituloDb).returning('id');

        if(atores_id) {
            const atorPromises = atores_id.map((ator_id: number) => {
                return connection('ator_titulo').insert({
                    titulo_id: id.id,
                    ator_id
                });
            });
    
            await Promise.all(atorPromises);
        }

        return response.json(id);
    } catch (error) {
        console.log(error);
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
        const { atores_id, ...tituloDb } = titulo;
        titulo.id = Number(id);

        await connection('titulo').where('id', id).update(tituloDb);

        await connection('ator_titulo').where('titulo_id', titulo.id).delete();
        if(atores_id) {
            const atorPromises = atores_id.map((ator_id: number) => {
                return connection('ator_titulo').insert({
                    titulo_id: titulo.id,
                    ator_id
                });
            });
    
            await Promise.all(atorPromises);
        }

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

        const titulo: Titulo = await connection('titulo').where('id', id).first();

        const atores = await connection('ator_titulo').where('titulo_id', id).select('ator_id');
        titulo.atores_id = atores.map((ator: any) => ator.ator_id);

        if (!titulo) {
            return response.status(404).json({ message: 'Title not found' });
        }

        return response.json(titulo);
    } catch (error) {
        return response.status(500).json({ message: 'Error getting title', error });
    }
}