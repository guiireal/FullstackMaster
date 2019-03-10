const index = (req, res) => {
    res.render('index', {time: new Date().getTime()})
}

const calc = (req, res) => {
    const { num1, num2 } = req.query
    if (num1 && num2)
        res.render('calc', { soma: parseFloat(num1) + parseFloat(num2) })

    res.render('calc', {soma: ''})
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
