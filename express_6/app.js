const express = require('express')
const path = require('path')
const mainRoot = require('./routes/routes')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(mainRoot)

app.listen(3000)