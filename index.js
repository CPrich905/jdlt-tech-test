const express = require('express')
const mongoose = require('mongoose')
const app = express()

const router = require('./config/router')
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
app.use('/api', router)

app.listen(port, () => console.log(`Up and running on port ${port}`))