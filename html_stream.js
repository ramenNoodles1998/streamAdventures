const trumpet = require('trumpet')
const through2 = require('through2')
const tr = trumpet()

let loud = tr.select('.loud').createStream()

loud.pipe(through2(function (line, _, next) {
    this.push(line.toString().toUpperCase())

    next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)
