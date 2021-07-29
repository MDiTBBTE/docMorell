import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    return await this.categoryModel.create(dto);
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  async deleteCategory(id: ObjectId): Promise<Category> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    return category._id;
  }
}
