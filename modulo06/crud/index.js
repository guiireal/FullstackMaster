const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const indexRouter = require('./routes')
const pessoasRouter = require('./routes/pessoas')
const connection = require('./db/connection')
const dependencies = {
    connection
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/pessoas', pessoasRouter(dependencies))

connection.connect(error => {
    if (error) console.log(`Error: ${error}`);
    else {
        app.listen(port, () => {
            console.log(`The CRUD listening in port ${port}`);
        })
    }
})

