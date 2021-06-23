const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>Main page</h1>')
})

router.get('/users', (req, res, next) => {
    res.send('<h1>Users List</h1>')
})

router.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found List</h1>')
})

module.exports = router;