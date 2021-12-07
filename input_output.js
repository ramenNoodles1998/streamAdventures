const through = require('through2')
const stream = through(write, end)

function write(buffer, encoding, next) {
    this.push('data' + buffer + '\n')
    next()
}

function end(done) {
    done()
}

process.stdin.pipe(stream).pipe(process.stdout)