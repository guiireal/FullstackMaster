const clientesController = require('./clientes')

const expect = require('chai').expect
const sinon = require('sinon')

describe('Testando Controller de Clientes', () => {
    it('Retorna lista de clientes', () => {
        let res = {
            send: function(){}
        }
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
        let mock = sinon.moch(res)
        mock.expects('render').once().withArgs('clientes', clientes)
        clientesController.listar({}, res)
    })
})