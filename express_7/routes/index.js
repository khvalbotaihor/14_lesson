const express = require('express')
const path = require('path')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'index.html'))
})
router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'users.html'))
})
router.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..','views', '404.html'))
})

module.exports = router