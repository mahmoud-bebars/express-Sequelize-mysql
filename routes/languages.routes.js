const express = require('express')
const router = express.Router()
const database = require('../config/database')
const { Languages } = require('../models')

// retrive all database
router.get('/all', (req, res) => {
  Languages.findAll()
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to retrive data',
        error: error,
      })
    })
})
// retrive rows with name parmeter
router.get('/name/:name', (req, res) => {
  const name = req.params.name
  Languages.findAll({
    where: {
      name: name,
    },
  })
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to retrive data',
        error: error,
      })
    })
})
// retrive row with perimery key (id --> primery key - Auto Incremant)
router.get('/:id', (req, res) => {
  const id = req.params.id
  Languages.findByPk(id)
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to retrive data',
        error: error,
      })
    })
})
// create new row with request Body
router.post('/', (req, res) => {
  const {
    name,
    released_year,
    github_rank,
    pypl_rank,
    tiobe_rank,
    link,
    thumbnail,
    description,
  } = req.body
  Languages.create({
    name: req.body.name,
    released_year: req.body.released_year,
    github_rank: req.body.github_rank,
    pypl_rank: req.body.pypl_rank,
    tiobe_rank: req.body.tiobe_rank,
    link: req.body.link,
    thumbnail: req.body.thumbnail,
    description: req.body.description,
  })
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to insert data',
        requestBody: req.body,
        error: error,
      })
    })
})

// Update row with id parameter
router.put('/:id', (req, res) => {
  const id = req.params.id

  Languages.update(
    {
      name: req.body.name,
      released_year: req.body.released_year,
      github_rank: req.body.github_rank,
      pypl_rank: req.body.pypl_rank,
      tiobe_rank: req.body.tiobe_rank,
      link: req.body.link,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
    },
    { where: { id: id } }
  )
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to retrive data',
        error: error,
      })
    })
})

// destroy row with id parameter
router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  Languages.destroy({
    where: {
      id: id,
    },
  })
    .then((results) => {
      res.send({ statusCode: 200, results: results })
    })
    .catch((error) => {
      res.send({
        statusCode: 400,
        message: 'faild to delete data',
        error: error,
      })
    })
})
module.exports = router
