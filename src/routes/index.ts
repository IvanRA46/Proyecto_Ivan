import express from 'express'
import CategoryRouter from './category.route'
import MotoCategoryRouter from './motos.route'


const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
  router.use('/motos', MotoCategoryRouter)
}

export default routerApi
