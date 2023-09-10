require("dotenv").config()
const express = require('express')
const dbConnection = require ("./config/dbConnection.js")
const routes = require ("./routes")
var cors = require('cors')
const app = express()
const User = require ("./model/userModel.js")
app.use(express.json())

app.use(cors())
dbConnection()
app.use(routes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)