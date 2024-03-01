import express from 'express'
import { MotoCategory } from '../types/motos.type'
import MotoCategoryService from '../services/motos.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'

const router = express.Router()
const service = new MotoCategoryService()

router.post('/', passport.authenticate('jwt',{session : false}), async (req, res) => {
  const Motocategory: MotoCategory = req.body
  const newMotoCategory = await service.create(Motocategory)

  res.status(201).json(newMotoCategory)
})

router.get('/',passport.authenticate('jwt',{session : false}), async (req, res, next) => {
  try {
    const motos = await service.findAll()
    res.status(200).json(motos)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',passport.authenticate('jwt',{session : false}), async (req, res, next) => {
  try {
    const Motocategory = await service.findById(req.params.id)
    res.status(200).json(Motocategory)
  } catch (error) {
    next(error)
  }
})

router.get('/',passport.authenticate('jwt',{session : false}), async (req, res, next) => {
  try {
    const motos = await service.findById(req.query.name as string)
    res.status(200).json(motos)
  } catch (error) {
    next(error)
  }
})

export default router