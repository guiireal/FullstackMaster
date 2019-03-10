const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientes')

router.get('/listar', clientesController.listar)

module.exports = router
