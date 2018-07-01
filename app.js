require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI) 

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

let usersRouter = require('./routes/users')
let cabinRouter = require('./routes/cabins')
let activityRouter = require ('./routes/activities')

let app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/api/users', usersRouter)
app.use('/api/users/:userId/cabins', cabinRouter)
app.use('/api/users/:userId/cabins/:cabinId/activities', activityRouter)

module.exports = app