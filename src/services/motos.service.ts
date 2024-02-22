import Categories from '../models/motos.models'
import { MotoCategory, MotoModel } from '../types/motos.type'
import boom from '@hapi/boom'

class MotoCategoryService {
  async create(category: MotoCategory) {
    const newCategory = await Categories.create(category).catch((error) => {
      console.log('Could not save category', error)
    })

    return newCategory
  }

  async findAll() {
    const categories = await Categories.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!categories) {
      throw boom.notFound('There are not categories')
    }

    return categories
  }

  async findById(id: string) {
    const category = await Categories.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }

    return category
  }

  async findByName(name: string) {
    const category = await Categories.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }
  }
}

export default MotoCategoryService