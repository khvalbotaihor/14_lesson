const express = require('express')
const route = express.Router()
const path = require('path')

route.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views','main.html'))
    res.render('main', {
        pageTitle: 'Main page',
    })
})

module.exports = route