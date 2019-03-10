const clientesController = require('./clientes')

const expect = require('chai').expect
const sinon = require('sinon')

describe('Testando Controller de Clientes', () => {
    it('Retorna lista de clientes', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.moch(res)
        mock.expects('send').once().withArgs('Full stack master')
        clientesController.listar({}, res)
    })
})