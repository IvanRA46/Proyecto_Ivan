import { Schema, model } from 'mongoose'
import { MotoCategory, MotoModel } from '../types/motos.type'

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
  }
})



export default model('MotoCategory', Categories)