const express = require('express')
const path = require('path')
const router = express.Router()
const mainDir = require('../utils/path')


router.get('/', (req, res, next) => {
    res.sendFile(path.join(mainDir, 'views', 'main.html'))
})

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(mainDir,'views', 'users.html'))
})

router.use('/', (req, res, next) => {
    res.sendFile(path.join(mainDir,'views', '404.html'))
})

module.exports = router