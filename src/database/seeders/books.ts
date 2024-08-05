import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Books tablosunu temizle
  await knex('Books').del();

  // Örnek veri ekle
  await knex('Books').insert([
    { name: 'Book 1', rating: null, isBorrowed: false },
    { name: 'Book 2', rating: null, isBorrowed: false },
  ]);
}
