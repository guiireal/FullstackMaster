const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const indexRouter = require('./routes')
const clienteRouter = require('./routes/clientes')

app.set('views', path.join(__dirname, 'views'))
// Adicionando o EJS como engine de views
app.set('view engine', 'ejs')

/* Middleware Default */
app.use((req, res, next) => {
    next()
})

app.use('/', indexRouter)
app.use('/clientes', clienteRouter)

app.listen(3000, () => {
    console.log(`Server listening in port ${port}`);
})

