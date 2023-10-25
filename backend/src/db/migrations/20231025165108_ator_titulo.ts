import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("ator_titulo", (table) => {
        table.integer('ator_id').notNullable();
        table.foreign('ator_id').references('id').inTable('ator');
        table.integer('titulo_id').notNullable();
        table.foreign('titulo_id').references('id').inTable('titulo');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("ator_titulo");
}

