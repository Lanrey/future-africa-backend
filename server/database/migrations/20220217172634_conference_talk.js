/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .withSchema('public')
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('conferenceTalk', (table) => {
      table
        .uuid('conference_talk_id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('talk_name');
      table.string('talk_duration');
      table.string('talk_speaker');
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('conferenceTalk');
};
