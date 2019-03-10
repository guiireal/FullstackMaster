const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '150793',
    database: 'sistemacadastro_fullstackmaster'
})

connection.connect(erro => {
    if (erro) console.log(`Erro ao conectar ! Erro: ${erro}`);
    else {
        console.log('Conectado ao MySQL !');
        connection.query('SELECT * FROM PESSOA', (erro, resultado) => {
            console.log(resultado)
        })
    }
    connection.end()
})