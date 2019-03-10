const chai = require('chai')
const indexController = require('./index');
const sinon = require('sinon')

describe('Testing application', () => {
    it('Render index', () => {
        let res = {
            render: () => {}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('index')
        indexController.index({}, res)
    })
    
    it('Render tabuada', () => {
        const numerosTabuada = []
        for (let i = 0; i <= 10; i++) numerosTabuada.push(i)
        let res = {
            render: () => {}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada', { numerosTabuada })
    })
})