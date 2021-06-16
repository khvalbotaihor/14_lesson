const fs = require('fs')

const requestHandler = (req, res) => {

    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/create-user" method="post"><input type="text" name="users"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === "/create-user" && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const users = parsedBody.split('=')[1]
            fs.writeFile('users.txt', users, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first Node JS page</title></head>')
    res.write('<body><h1>Hello from my Node JS server!</h1></body>')
    res.write('</html>')
    res.end()
}

//module.exports = requestHandler
// module.exports = {
//     handler: requestHandler,
//     someText: "Some text"
// }

// module.exports.handler = requestHandler
// module.exports.someText = "Some text"

exports.handler = requestHandler
exports.someText = "Some text"