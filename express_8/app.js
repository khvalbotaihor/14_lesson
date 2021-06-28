const express = require('express')
const path = require('path')
const app = express()
const mainRoute = require('./routes/route')

app.use(express.static(path.join(__dirname, 'public')))
app.use(mainRoute)

app.listen(3000)