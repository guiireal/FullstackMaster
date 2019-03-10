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
    res.render('clientes', { clientes })
}

module.exports = {
    listar
}