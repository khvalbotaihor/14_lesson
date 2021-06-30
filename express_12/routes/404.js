const express = require('express')
const route = express.Router()
const path = require('path')

route.use('/', (req, res, next) => {
//    res.sendFile(path.join(__dirname, '..', 'views','404.html'))
    res.status(404).render('404', {pageTitle: '404 page'})
})

module.exports = route