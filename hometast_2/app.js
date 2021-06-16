const http = require('http')
const router = require('./1')

const server = http.createServer(router.router)

server.listen(3000)