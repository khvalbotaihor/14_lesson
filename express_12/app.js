const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mainRoute = require('./routes/main')
const usersRoute = require('./routes/users')
const pageNotFoundRoute = require('./routes/404')

app.use(bodyParser.urlencoded({deprecated: true}))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(mainRoute)
app.use(usersRoute.routes)
app.use(pageNotFoundRoute)

app.listen(3000)