const express = require('express')
const path = require('path')
const app = express()
const mainRoot = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))
app.use(mainRoot)


app.listen(3000)