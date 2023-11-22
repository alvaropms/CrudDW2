import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("cliente", (table) => {
        table.boolean('ativo').defaultTo(true).alter();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("cliente", (table) => {
        table.boolean('ativo').defaultTo(null).alter();
    });
}