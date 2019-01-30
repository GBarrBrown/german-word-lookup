
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('translations').del()
    .then(function () {
      // Inserts seed entries
      return knex('translations').insert([
        {german_word_id: 1, english_word_id: 1},
        {german_word_id: 2, english_word_id: 1},
        {german_word_id: 3, english_word_id: 1},
        {german_word_id: 4, english_word_id: 3},
        {german_word_id: 5, english_word_id: 2}
      ]);
    });
};
