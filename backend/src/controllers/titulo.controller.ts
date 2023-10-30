import { Request, Response } from 'express';
import Titulo from '../models/titulo.model';
const connection = require('../db/connection');

export async function create(request: Request, response: Response) {
    const titulo: Titulo = request.body;

    const [id] = await connection('titulo').insert(titulo).returning('id');

    return response.json({ id });
}

export async function deleteItem(request: Request, response: Response) {
    const { id } = request.params;

    await connection('titulo').where('id', id).delete();

    return response.status(204).send();
}

export async function update(request: Request, response: Response) {
    const { id } = request.params;
    const titulo: Titulo = request.body;
    titulo.id = Number(id);

    await connection('titulo').where('id', id).update(titulo);

    return response.status(204).send();
}

export async function list(request: Request, response: Response) {
    const titulos = await connection('titulo').select('*');

    return response.json(titulos);
}

export async function get(request: Request, response: Response) {
    const { id } = request.params;

    const titulo = await connection('titulo').where('id', id).first();

    return response.json(titulo);
}