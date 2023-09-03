require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const apiRouter = require('./api/routes/apiRouter')

app.get('/', function(req, res){
    res.send('Hello World')
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/app', express.static (path.join (__dirname, '/public')))

app.use('/api', apiRouter)

app.use(bodyParser.json())

let port = process.env.PORT || 3000
app.listen (port)