const listar = (req, res) => {
    const clientes = [
        {
            id: 1,
            name: 'Guilherme'
        },
        {
            id: 2, 
            name: 'Maria'
        }
    ]
    res.send(
        `<table>
         ${clientes.map(cliente => (
            `<tr><td>${cliente.id}</td><td>${cliente.name}</td></tr>`))
         }
        </table>`
    )
}

module.exports = {
    listar
}