import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('borrowed_books', (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('bookId').unsigned().notNullable().references('id').inTable('books').onDelete('CASCADE');
    table.integer('score').nullable();
    table.boolean('isReturned').defaultTo(false);
    table.timestamp('borrowedAt').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('borrowed_books');
}
