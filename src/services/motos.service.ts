import { ObjectId } from 'mongoose'
import Categories from '../models/motos.models'
import { MotoCategory, MotoModel } from '../types/motos.type'
import boom from '@hapi/boom'

class MotoCategoryService {
  async create(category: MotoCategory, userId: ObjectId) {
    const newCategory = await Categories.create({
      ...category,
      user: userId
    }).catch((error) => {
      console.log('Could not save category', error)
    })
    const existingmoto = await this.findById((newCategory as any)._id)
    return existingmoto.populate([{path: 'user', strictPopulate: false}])
  }

  async findAll() {
    const categories = await Categories.find()
    .populate([{path: 'user', strictPopulate: false}])
    .catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!categories) {
      throw boom.notFound('There are not categories')
    }

    return categories
  }

  async findFirst() {
    const categories = await Categories.find()
    
    .catch((error) => {
      console.log('Error while connecting to the DB', error)
    })
  
    if (!categories) {
      throw boom.notFound('There are not categories')
    }
  
    return categories[0]
  }

  async findById(id: string) {
    const category = await Categories.findById(id)
    .populate([{path: 'user', strictPopulate: false}])
    .catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }

    return category
  }

  async findByName(name: string) {
    const category = await Categories.findOne({ name })
    .populate([{path: 'user', strictPopulate: false}])
    .catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }

    return category
  }


  async findByUser(user: ObjectId) {
    try {
    const category = await Categories.find({ user })
    console.log(user)
    if(!category || category.length == 0 ){
      throw new Error("Moto no encontrada")
    }
    return category
  } catch (error) {
    console.log('Error encontrando motos:', error);
    throw new Error('Error encontrando motos');
    }
  }
}



export default MotoCategoryService