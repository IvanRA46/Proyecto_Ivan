import { Schema, model } from 'mongoose'
import { MotoCategory, MotoModel } from '../types/motos.type'
import { USER_REFERENCE } from './user.model'

export const MOTOS_REFERENCE = 'MotosCategory'

const Categories = new Schema<MotoCategory, MotoModel>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: USER_REFERENCE
  }
})



export default model('MotoCategory', Categories)