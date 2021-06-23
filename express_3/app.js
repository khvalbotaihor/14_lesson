const express = require('express')
const app = express()

const mainRoutes = require('./routes/index')

app.use(mainRoutes)

app.listen(3000)