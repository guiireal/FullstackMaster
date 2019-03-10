const express = require('express')
const router = express.Router()

const indexController = require('../controllers')

router.get('/', indexController.index)
router.get('/calc', indexController.calc)
router.get('/par/:id', indexController.par)
module.exports = router

