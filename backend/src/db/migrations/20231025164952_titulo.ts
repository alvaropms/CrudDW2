import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("titulo", (table) => {
        table.increments("id").primary();
        table.string('nome').notNullable();
        table.integer('ano').notNullable();
        table.string('sinopse').notNullable();
        table.integer('classe_id').notNullable();
        table.foreign('classe_id').references('id').inTable('classe');
        table.integer('diretor_id').notNullable();
        table.foreign('diretor_id').references('id').inTable('diretor');
      });
}


export async function down(knex: Knex): Promise<void> {
}

