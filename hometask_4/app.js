const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    const headers = req.headers

    if (url === '/'){
        res.write('<html>')
        res.write('<header><title>Enter data</title></header>')
        res.write('<body><form action="/users" method="post"><input type="text" name="enteredData"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url=== '/users' && method==='POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('EnteredData.txt', message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<header><title>Node Js webSite</title></header>')
    res.write('<body><h1>This is node JS server response</h1></body>')
    res.write('</html>')
    res.end()

})

server.listen(3000)