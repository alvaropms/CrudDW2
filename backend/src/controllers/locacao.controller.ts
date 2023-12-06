import { Request, Response } from 'express';
import Locacao from '../models/locacao.model';
import Item from '../models/item.model';
import Titulo from '../models/titulo.model';
import Classe from '../models/classe.model';
const connection = require('../db/connection');


export async function create(req: Request, res: Response) {
        try {
            const locacao: Locacao = req.body;

            locacao.dt_locacao = new Date();

            const insertedIds = await connection('locacao').insert(locacao);
            const id = insertedIds[0];
            locacao.id = id;

            return res.status(201).json(locacao);
        } catch (error) {
            console.log(error);
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

export async function returnRentedItem(req: Request, res: Response){
    try {
        const { id } = req.params;
        const locacao: Locacao = await connection('locacao').where('id', id).first();

        if (!locacao) {
            return res.status(404).json({ message: 'Locacao não encontrado' });
        }

        const item: Item = await connection('item').where('id', locacao.item_id).first();
        const titulo: Titulo = await connection('titulo').where('id', item.titulo_id).first();
        const classe: Classe = await connection('classe').where('id', titulo.classe_id).first();

        const dt_devolucao_efetiva = new Date();
        const dt_devolucao_prevista = new Date(locacao.dt_devolucao_prevista);

        let multaCobrada: number = 0;
        
        if (dt_devolucao_efetiva > dt_devolucao_prevista) {
            multaCobrada = classe.valor ?  Number(classe.valor) + Number(locacao.valorCobrado) : 0;
        }

        console.log(multaCobrada, classe.valor, locacao.valorCobrado);

        await connection('locacao').where('id', id).update({
            dt_devolucao_efetiva,
            multaCobrada
        });

        return res.status(200).json({ message: 'Item devolvido com sucesso' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
}