const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from express website</h1>' +
        '<p>Default middleware</p>')
})

module.exports = router