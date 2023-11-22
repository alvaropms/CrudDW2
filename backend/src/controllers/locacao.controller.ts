import { Request, Response } from 'express';
import Locacao from '../models/locacao.model';
const connection = require('../db/connection');


export async function create(req: Request, res: Response) {
        try {
            const locacao: Locacao = req.body;

            const insertedIds = await connection('locacao').insert(locacao);
            const id = insertedIds[0];
            locacao.id = id;

            return res.status(201).json(locacao);
        } catch (error) { console.log(error);
            return res.status(500).json({ error });
        }
}

export async function deleteItem(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await connection('locacao').where('id', id).delete();

            return res.status(204).send();
        } catch (error) { console.log(error);
            return res.status(500).json({ error });
        }
}

export async function list(req: Request, res: Response) {
        try {
            const locacoes = await connection('locacao').select('*');

            return res.json(locacoes);
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
            const locacao: Locacao = req.body;

            const locacaoExists = await connection('locacao').where('id', id).first();

            if (!locacaoExists) {
                return res.status(404).json({ message: 'Locacao não encontrado' });
            }

            await connection('locacao').where('id', id).update(locacao);
        } catch (error) { console.log(error);
            return res.status(500).json({ error });
        }
}