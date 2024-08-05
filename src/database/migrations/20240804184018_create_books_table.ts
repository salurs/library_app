import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.double('rating').nullable().defaultTo(null);
    table.boolean('isBorrowed').defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('books');
}
