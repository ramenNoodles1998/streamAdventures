const crypto = require('crypto')
const tar = require('tar')
const zlib = require('zlib')
const concat = require('concat-stream')

const parser = new tar.Parse()
parser.on('entry', function (e) {
    let h = crypto.createHash('md5', { encoding: 'hex' })
    
    e.pipe(h).pipe(concat(
        function (hash) {
            if (e.type !== 'Directory') console.log(hash + ' ' + e.path)
    }))
})

process.stdin
  .pipe(crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]))
  .pipe(zlib.createGunzip())
  .pipe(parser)
