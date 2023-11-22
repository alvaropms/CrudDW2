import { Request, Response } from 'express';
import Cliente from '../models/cliente.model';
const connection = require('../db/connection');


export async function create(req: Request, res: Response) {
    try {
        const cliente: Cliente = req.body;

        const insertedIds = await connection('cliente').insert(cliente);
        const id = insertedIds[0];
        cliente.id = id;

        return res.status(201).json(cliente);
    } catch (error) { console.log(error);
        return res.status(500).json({ error });
    }
}

export async function deleteItem(req: Request, res: Response) {
    try {
        const { id } = req.params;

        await connection('cliente').where('id', id).delete();

        return res.status(204).send();
    } catch (error) { console.log(error);
        return res.status(500).json({ error });
    }
}

export async function list(req: Request, res: Response) {
    try {
        const clientes = await connection('cliente').select('*');

        return res.json(clientes);
    } catch (error) { console.log(error);
        return res.status(500).json({ error });
    }
}

export async function get(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const cliente = await connection('cliente').where('id', id).first();

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        return res.json(cliente);
    } catch (error) { console.log(error);
        return res.status(500).json({ error });
    }
}

export async function update(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const cliente: Cliente = req.body;

        const clienteExists = await connection('cliente').where('id', id).first();

        if (!clienteExists) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        await connection('cliente').where('id', id).update(cliente);
    } catch (error) { console.log(error);
        return res.status(500).json({ error });
    }
}
