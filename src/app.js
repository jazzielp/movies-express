import express from 'express'
import { config } from './config/config.js'

export const app = express()

const port = config.port

app.get('/', (req, res) => res.send('Hello World!'))

export const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
