import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("locacao", (table) => {
        table.date('dt_devolucao_efetiva').nullable().alter();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("locacao", (table) => {
        table.date('dt_devolucao_efetiva').notNullable().alter();
    });
}