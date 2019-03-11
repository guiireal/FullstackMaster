
const pessoasController = require('../controllers/pessoas')

const pessoasRouter = ({ connection }) => {
    const router = require('express').Router()

    router.get('/', pessoasController.index.bind(null, connection))
    router.get('/excluir/:id', pessoasController.deleteOne.bind(null, connection))
    return router
}

module.exports = pessoasRouter