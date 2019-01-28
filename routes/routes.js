const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  var searchStr = (req.body.searchStr)
  db.searchWord(searchStr)
  .then(results => {
    res.render('index', results)
  })
})

router.get('/add', (req, res) => {
  res.render('add-word')
})

router.post('/add-word', (req, res) => {
  res.redirect('/')
})

module.exports = router
