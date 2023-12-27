import mongoose, { Document } from 'mongoose'

export interface ICategory extends Document {
  name: string
}

export interface ICategory extends mongoose.Document {
  _id: string
  name: string
  createAt?: string
  updateAt?: string
  __v: number
}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    unique: true,
  },
})

export const Category = mongoose.model<ICategory>('Categories', categorySchema)
