import express from 'express'
import cors from 'cors'
import CategoryRouter from './category.route'
import MotoCategoryRouter from './motos.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'



const routerApi = (app) => {
  const router = express.Router()
  app.use(cors())
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
  router.use('/motos', MotoCategoryRouter)
  router.use('/users', UserRouter)
  router.use('/auth', AuthRouter)
}

export default routerApi
