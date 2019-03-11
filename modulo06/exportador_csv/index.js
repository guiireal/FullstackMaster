const connection = require('./db/connection')
const fs = require('fs')

const sql = 'SELECT ID, NOME, CARGO FROM PESSOA'
const writable = fs.createWriteStream('pessoas.csv')

writable.write('ID,NOME\n', () => {
    connection.connect(err => {
        if (err) console.log(`Erro: ${err}`)
        const query = connection.query(sql)
        query.on('result', row => {
            const data = `${row.ID},${row.NOME}\n` 
            connection.pause()
            setTimeout(() => {
                writable.write(data, () => {
                    connection.resume()
                })
            }, 50)
        })
        query.on('end', () => {
            writable.end()
            connection.end()
        })
    })
})

