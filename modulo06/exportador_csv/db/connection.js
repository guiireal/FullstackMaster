const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '150793',
    database: 'sistemacadastro_fullstackmaster'
})

module.exports = connection