const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    res.end(`Olá Mundo !`)
})

server.listen(port, () => {
    console.log(`Server listening in port: ${port}`)
})