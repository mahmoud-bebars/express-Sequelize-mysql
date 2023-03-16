const { Sequelize } = require('sequelize')

module.exports = new Sequelize('nodeapp', 'root', 'my-secret-pw', {
  host: 'localhost',
  dialect: 'mysql',
})
