import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { pagination } from 'typeorm-pagination'
import 'reflect-metadata'
const port = process.env.PORT || 4000
// import routes
import apiRouter from './routes/api.routes'
createConnection()
  .then(async () => {
    // create express app
    const app = express()
    // middleware
    app.use(express.static('public'))
    app.use(cors())
    app.use(express.json())
    app.use(pagination)
    // routes
    app.use('/api', apiRouter)
    app.listen(port)
    console.log(`Express server has started on port ${port}`)
  })
  .catch((error) => console.log(error))
