/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .withSchema('public')
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('conferenceAttendee', (table) => {
      table
        .uuid('conference_attendee_id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('attendee_name');
      table.string('attendee_email');
      table
        .uuid('attendee_talk')
        .references('conference_talk_id')
        .inTable('conferenceTalk')
        .onDelete('cascade')
        .onUpdate('cascade');
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('conferenceAttendee');
};
