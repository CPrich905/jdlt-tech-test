const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const router = require('./config/router')
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, () => console.log('database connected'))

app.use(express.static(`${__dirname}/public`))

app.use(bodyParser.json())
app.use('/api', router)

if(!module.parent){
  app.listen(port, () => console.log(`JDLT test up and running on port ${port}`))
}

module.exports = app