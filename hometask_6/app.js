const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if (url ==='/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter data</title></head>')
        res.write('<head><form action="/users" method="post"><input type="text" name="data"><button type="submit">Send</button></form></head>')
        res.write('</html>')
        return res.end()
    }

    if (url ==='/users' && method==='POST'){
        const body = []
        req.on('data', (chunk) =>{
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('Message.txt', message, (err) => {
                res.statusCode=302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node JS website</title></head>')
    res.write('<head><body><h1>This is node js file</h1></body></head>')
    res.write('</html>')
    res.end()
})

server.listen(3000)