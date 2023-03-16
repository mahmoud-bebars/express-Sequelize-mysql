const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const database = require('./config/database')

// Test DB
database
  .authenticate()
  .then(() => {
    console.log('💿 Connection has been established successfully.')
  })
  .catch((error) => {
    console.log(`💿 Database Connection Refused Due to ERROR:  ${error}`)
  })

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World 🌍',
  })
})

// Langauges Routes
app.use('/languags', require('./routes/languages.routes'))

const PORT = process.env.PORT || 5000
const APP_URL = process.env.APP_URL || '0.0.0.0:'

app.listen(PORT, () => {
  console.log(`🚀 Server is starting at: ${APP_URL + PORT}`)
})
