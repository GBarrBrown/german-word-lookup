
exports.up = function(knex, Promise) {
    return knex.schema.createTable('translations', (table) => {
        table.string('german_word_id')
        table.string('english_word_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('translations')
};
