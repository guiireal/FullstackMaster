const calculoJuros = (valor, taxa, meses) => valor * Math.pow(1 + taxa, meses)

module.exports = calculoJuros
