const http = require('http')
const through = require('through2')
const stream = through(write, end)

function write (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
}
function end (done) { done() }

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res)
    }
})

server.listen(process.argv[2])