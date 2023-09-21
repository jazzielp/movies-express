const express = require('express')

const { config } = require('./config/config.js')
const routerApi = require('./routers/index.js')
const { errorHandler, logError, ormErrorHandler, boomErrorHandler } = require('./middlewares/error.handler.js')

const app = express()

const port = config.port
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
routerApi(app)

app.use(logError)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app, server }
