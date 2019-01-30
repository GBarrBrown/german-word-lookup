
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('english_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('english_words').insert([
        {id: 1, word: 'The'},
        {id: 2, word: 'I'},
        {id: 3, word: 'You'}
      ]);
    });
};
