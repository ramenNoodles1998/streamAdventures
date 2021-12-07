const combine = require('stream-combiner')
const through = require('through2').obj
const split = require('split2')
const zlib = require('zlib')

module.exports = function() {
    const stream = through(write, end)
    
    function write(buffer, encoding, next) {
        this.push(buffer.toString())
        next()
    }
    
    function end(done) {
        done()
    }

    return combine(
        split(),
        stream,
        zlib.createGzip()
    )
}