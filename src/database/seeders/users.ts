import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Users tablosunu temizle
  await knex('Users').del();

  // Örnek veri ekle
  await knex('Users').insert([
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
  ]);
}
