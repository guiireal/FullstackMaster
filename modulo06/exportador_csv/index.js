const connection = require('./db/connection')
const fs = require('fs')

const sql = 'SELECT ID, NOME, CARGO FROM PESSOA'
const writable = fs.createWriteStream('pessoas.csv')

connection.connect(err => {
    if (err) console.log(`Erro ao conectar ao banco de dados ! Erro: ${err}`)
    const query = connection.query(sql)
    query.on('result', row => {
        const data = `${row.ID}, ${row.NOME}\n` 
        connection.pause()
        writable.write(data, () => {
            connection.resume()
            console.log('Written')
        })
    })
    query.on('end', () => {
        writable.end()
        connection.end()
    })
})