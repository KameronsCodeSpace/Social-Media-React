exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments();
      table.text('email').unique().notNullable();
      table.text('password').notNullable();
      table.datetime('created_at').notNullable();
      table.boolean('is_logged_in').notNullable().defaultTo(true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };