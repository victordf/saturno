import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.date('createdAt').defaultTo(new Date())
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('user')
}