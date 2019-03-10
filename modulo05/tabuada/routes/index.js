const router = require('express').Router()
const indexController = require('../controllers')

router.get('/', indexController.index)
router.get('/tabuada', indexController.tabuada)
router.get('/tabuada/do/:numero', indexController.tabuadaDo)

module.exports = router