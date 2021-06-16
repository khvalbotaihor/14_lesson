const fs = require('fs')

const routerHandler = (req, res) => {

    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Please enter data</title></head>')
        res.write('<body><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/users' && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
            console.log(chunk)
        })


        return req.on('end', () => {
            let parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('Users.txt', message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node JS response</title></head>')
    res.write('<body><h1>Hello from Node JS server!</h1></body>')
    res.write('</html>')
    res.end()
}

exports.router = routerHandler