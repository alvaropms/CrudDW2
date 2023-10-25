import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("item", (table) => {
        table.increments("id").primary();
        table.integer('num_serie').notNullable();
        table.date('dt_aquisicao').notNullable();
        table.string('tipo_item').notNullable();
        table.integer('titulo_id').notNullable();
        table.foreign('titulo_id').references('id').inTable('titulo');
      });
}


export async function down(knex: Knex): Promise<void> {
}

