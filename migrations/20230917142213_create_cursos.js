/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cursos', (table) => {
    table.increments('id')
    table.string('nome', 100).notNullable()
    table.string('tipo', 100).notNullable()
    table.decimal('valor', 10, 2).notNullable().useNullAsDefault()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('cursos')
};
