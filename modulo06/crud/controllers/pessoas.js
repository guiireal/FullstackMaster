const pessoasModel = require('../models/pessoas')

const index = async (connection, req, res) => {
    const result = await pessoasModel.findAll(connection)
    res.render('pessoas/index', { pessoas: result })
}

const deleteOne = async (connection, req, res) => {
    await pessoasModel.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteOne
}
