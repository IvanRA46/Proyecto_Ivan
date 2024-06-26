import express from 'express'
import mongoose from 'mongoose'
import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middlewares/error.handler'
import routerApi from './routes'
import { config } from './config/config'
import cors from 'cors'
import passport from 'passport'
import './utils/auth'

const { mongoUri, port } = config

const app = express()

const connectDB = () => {
  mongoose.connect(mongoUri)
}

app.use(express.json())
app.use(cors())
routerApi(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
