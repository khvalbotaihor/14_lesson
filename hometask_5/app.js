const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if (url==='/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter data</title></head>')
        res.write('<body><form action="/users" method="post"><input type="text" name="enteredData"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url==='/users' && method==='POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
         return req.on('end', () => {
             const parsedBody = Buffer.concat(body).toString()
             console.log(parsedBody)
             const message = parsedBody.split('=')[1]
             console.log(message)
             fs.writeFile('UsersData.txt', message, (err) => {
                 res.statusCode=302
                 res.setHeader('Location', '/')
                 return res.end()
             })
         })

    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node JS Website</title></head>')
    res.write('<body><h1>This is a node JS server</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)