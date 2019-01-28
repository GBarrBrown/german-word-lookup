const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  searchWord
}

function searchWord (searchStr, db = connection) {
  return db('german_words').where('word', 'like', ''+searchStr+'%').select()
}