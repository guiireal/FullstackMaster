const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')
const indexRouter = require('./routes')

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// BODY PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES
app.use('/', indexRouter)

// STATIC FILES
app.use(express.static('public'))

// LISTEN IN PORT
app.listen(port, () => {
    console.log(`The web app listening in port ${port}`);
})