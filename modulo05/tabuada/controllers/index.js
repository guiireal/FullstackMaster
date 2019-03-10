const index = (req, res) => {
    res.render('index')
}

const tabuada = (req, res) => {
    const numerosTabuada = []
    for (let i = 0; i <= 10; i++)
        numerosTabuada.push(i)
        
    res.render('tabuada', { numerosTabuada })
}

const tabuadaDo = (req, res) => {
    if (req.params.numero) {
        const { numero } = req.params
        res.render('resultadoTabuada', { numero })
    } else {
        res.send('Informe um número na URL')
    }
}

module.exports = {
    index,
    tabuada,
    tabuadaDo
}