const express = require('express')
const app = express()
const path = require('path')
const mainRoot = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))
app.use(mainRoot)

app.listen(3000)