import type { Model } from 'mongoose'
import { ObjectId } from 'mongoose'
import { User } from './user.type'

export type MotoCategory = {
  id?: string
  name: string
  description?: string
  stock: number
  brand: string
  user: User
};




export type MotoModel = Model<MotoCategory>