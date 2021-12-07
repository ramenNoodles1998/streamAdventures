const { Writable } = require('stream')

const w = new Writable({
    write(chunk, encoding, callback) {
        console.log('writing: ' + chunk)
        process.nextTick(callback)
    }
})
process.stdin.pipe(w)