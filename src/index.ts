import express from './app/example/node_modules/express'
import cors from 'cors'
import { createConnection } from './app/example/node_modules/typeorm'
import { pagination } from 'typeorm-pagination'
import 'reflect-metadata'
import multer from 'multer'
const upload = multer()

// import routes
import routes from './app/example/example.routes'
const app = express()
createConnection()
  .then(async (connection) => {
    // create express app
    const app = express()
    // middlewares
    app.use(cors())
    app.use(express.json())
    app.use(pagination)
    // routes
    app.use('/api/init', upload.none(), routes)
    app.listen(4000)
    console.log('Express server has started on port 4000')
  })
  .catch((error) => console.log(error))
