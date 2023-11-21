import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cliente", (table) => {
        table.increments("id").primary();
        table.integer('num_inscricao').notNullable();
        table.string('nome').notNullable();
        table.date('dt_nascimento').notNullable();
        table.boolean('ativo').notNullable();
        table.string('sexo', 1).notNullable();
        table.string('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.boolean('socio').defaultTo(false).notNullable();
        table.integer('socio_id').unsigned().references('id').inTable('cliente');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cliente');
}

