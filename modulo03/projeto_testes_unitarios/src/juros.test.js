const calculoJuros = require('./juros')
const expect = require('chai').expect

describe('Módulo de juros', () => {
    it('Calcula juros compostos', () => {
        const teste1010 = calculoJuros(1000, 0.01, 1)
        expect(teste1010).to.equal(1010)

        const outroTeste = calculoJuros(1000, 0.02, 1)
        expect(outroTeste).to.equal(1020)
    })
})