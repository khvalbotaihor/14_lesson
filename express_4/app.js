const express = require('express')
const path = require('path')
const rootDir = require('./util/path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

app.use('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'main.html'))
})

app.listen(3000)