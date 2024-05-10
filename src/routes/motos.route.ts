import express from 'express'
import { MotoCategory } from '../types/motos.type'
import MotoCategoryService from '../services/motos.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import { JwtRequestType } from '../types/user.type'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new MotoCategoryService()

router.post('/', passport.authenticate('jwt',{session : false}),
 async (req: JwtRequestType, res) => {
  const { 
    user: { sub }, 
  } = req
  const Motocategory: MotoCategory = req.body
  const newMotoCategory = await service.create(
    Motocategory,
    sub as unknown as ObjectId)

  res.status(201).json(newMotoCategory)
})

router.get('/findFirst', async (req: JwtRequestType, res, next) => {
  try {
    const{
      user
    } = req
    const motos = await service.findFirst()
    res.status(200).json(motos)
  } catch (error) {
    next(error)
  }
})

router.get('/',passport.authenticate('jwt',{session : false}), async (req: JwtRequestType, res, next) => {
  try {
    const{
      user
    } = req
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

router.get('/findByName/:name',passport.authenticate('jwt',{session : false}), async (req, res, next) => {
  try {
    const motos = await service.findByName(req.params.name as string)
    res.status(200).json(motos)
  } catch (error) {
    next(error)
  }
})

router.get(
  '/findByUser',
passport.authenticate('jwt',{session : false}), 
async (req, res, next) =>{
  try{
    const motos = await service.findByUser(req.query.user as unknown as ObjectId)
    res.status(200).json(motos)
  } catch (error){
    next (error)
  }
})



export default router