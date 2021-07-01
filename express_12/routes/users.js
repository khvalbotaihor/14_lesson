const express = require('express')
const route = express.Router()
const path = require('path')

const users = []

route.get('/users', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views','users.html'))
    res.render('users', {
        pageTitle: 'Users page',
        data: users
    })
})

route.post('/users', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views','users.html'))
//    console.log(req.body)
    users.push({title: req.body.title})
    res.redirect('/users')
})

exports.routes = route
exports.users = users