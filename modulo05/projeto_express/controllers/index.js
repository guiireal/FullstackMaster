const index = (req, res) => {
    res.send(`Página Inicial`)
}

const calc = (req, res) => {
    const { num1, num2 } = req.query
    if (num1 && num2)
        res.send(`Soma: ${parseFloat(num1) + parseFloat(num2)}`)

    res.send('')
}

const par = (req, res) => {
    const isPar = (req.params.id % 2 === 0)
    
    const resposta = isPar ? `É par` : 'É ímpar' 
    res.send(resposta)
}


module.exports = {
    index,
    calc,
    par
};
