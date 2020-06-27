const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const routes = require('../routes')

const app = express()

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false })) 
// parse application/json
app.use(parser.json())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// routes
app.use(routes)

module.exports = app