const express = require('express')
const { config } = require('./config/config.js')

const app = express()

const port = config.port

app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app, server }
