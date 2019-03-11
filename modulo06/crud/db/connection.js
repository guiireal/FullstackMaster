const mysql = require('mysql')

const dataConnect = {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '150793',
    database: 'sistemacadastro_fullstackmaster'
}

module.exports = mysql.createConnection(dataConnect)