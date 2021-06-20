const http = require('http')

const express = require('express')
const app = express();

app.use('/', (req, res, next) => {
    console.log("Always middleware!")
    next()
})

app.use('/add-product', (req, res, next) => {
    console.log("In ANOTHER the middleware!")
    res.send('<h1>Hello from Add Product Page</h1>')
})
app.use('/', (req, res, next) => {
    console.log("In default the middleware!")
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)