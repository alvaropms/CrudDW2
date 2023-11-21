import { Request, Response } from 'express';
import Locacao from '../models/locacao.model';
const connection = require('../db/connection');

module.exports = {

    async create(req: Request, res: Response) {
        try {
            const locacao: Locacao = req.body;

            const insertedIds = await connection('locacao').insert(locacao);
            const id = insertedIds[0];
            locacao.id = id;

            return res.status(201).json(locacao);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await connection('locacao').where('id', id).delete();

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async list(req: Request, res: Response) {
        try {
            const locacoes = await connection('locacao').select('*');

            return res.json(locacoes);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async get(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const cliente = await connection('cliente').where('id', id).first();

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            return res.json(cliente);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const locacao: Locacao = req.body;

            const locacaoExists = await connection('locacao').where('id', id).first();

            if (!locacaoExists) {
                return res.status(404).json({ message: 'Locacao não encontrado' });
            }

            await connection('locacao').where('id', id).update(locacao);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}