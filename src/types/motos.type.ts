import type { Model } from 'mongoose'

export type MotoCategory = {
  id?: string
  name: string
  description?: string
  stock: number
  brand: string
};


export type MotoModel = Model<MotoCategory>