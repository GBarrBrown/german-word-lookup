
exports.up = function(knex, Promise) {
  return knex.schema.createTable('german_words', (table) => {
      table.increments('id').primary()
      table.string('word')
      table.string('gender')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('german_words')
  
};
