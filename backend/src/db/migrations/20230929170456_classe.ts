import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("classe", (table) => {
        table.increments("id").primary();
        table.decimal('valor').notNullable();
        table.integer('dias_atraso').notNullable();
        table.string('nome').notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("classe");
}

