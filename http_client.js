const { request } = require('http')

const options = { method: 'POST' }
process.stdin.pipe(request('http://localhost:8099', options, (res) => {
    res.pipe(process.stdout)
}))
    