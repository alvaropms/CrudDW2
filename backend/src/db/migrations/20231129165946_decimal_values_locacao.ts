import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("locacao", (table) => {
        table.decimal('valorCobrado').alter();
        table.decimal('multaCobrada').alter();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("locacao", (table) => {
        table.integer('valorCobrado').alter();
        table.integer('multaCobrada').alter();
    });
}