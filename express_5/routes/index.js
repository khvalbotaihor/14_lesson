const express = require('express')
const path = require('path')

const route = express.Router()

route.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'index.html'))
})
route.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'users.html'))
})
route.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'))
})


module.exports = route