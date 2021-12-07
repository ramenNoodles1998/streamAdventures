const fs = require('fs')
let stream = process.argv[2]

fs.createReadStream(stream).pipe(process.stdout)