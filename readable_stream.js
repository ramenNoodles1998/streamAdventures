const { Readable } = require('stream')
const mystream = new Readable({})

mystream._read = () => {
}

mystream.push(process.argv[2])



mystream.pipe(process.stdout)