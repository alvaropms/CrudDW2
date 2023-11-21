import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("locacao", (table) => {
        table.increments("id").primary();
        table.integer('cliente_id').unsigned().notNullable();
        table.foreign('cliente_id').references('id').inTable('cliente');
        table.integer('item_id').unsigned().notNullable();
        table.foreign('item_id').references('id').inTable('item');
        table.date('dt_locacao').notNullable();
        table.date('dt_devolucao_prevista').notNullable();
        table.date('dt_devolucao_efetiva').notNullable();
        table.integer('valorCobrado').notNullable();
        table.integer('multaCobrada').defaultTo(0).notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {

}

