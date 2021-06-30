const express = require('express')
const route = express.Router()
const path = require('path')

route.get('/users', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views','users.html'))
    res.render('users', {
        pageTitle: 'Users page'
    })
})
route.post('/users', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views','users.html'))
    console.log(req.body)
    res.redirect('/users')
})

module.exports = route