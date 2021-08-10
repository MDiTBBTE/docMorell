import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private fileService: FileService,
  ) {}

  async createProduct(
    dto: CreateProductDto,
    pillPicture,
    packagePicture,
  ): Promise<Product> {
    const getImagePathOrNull = (img) =>
      img ? this.fileService.createFile(FileType.IMAGE, pillPicture) : null;

    const pillPicturePath = getImagePathOrNull(pillPicture);
    const packagePicturePath = getImagePathOrNull(packagePicture);

    const product = await this.productModel.create({
      ...dto,
      pillImage: pillPicturePath,
      packageImage: packagePicturePath,
    });

    return product;
  }

  async getAllProducts() {
    return this.productModel.find();
  }

  async getOneProduct(id: ObjectId): Promise<Product> {
    return this.productModel.findById(id);
  }

  async getProductsWIthParams(type: string): Promise<Product[]> {
    return this.productModel.find({ type: type });
  }

  async search(query: string): Promise<Product[]> {
    return this.productModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const product = await this.productModel.findByIdAndDelete(id);

    product.pillImage &&
      this.fileService.removeFile(FileType.IMAGE, product.pillImage);
    product.packageImage &&
      this.fileService.removeFile(FileType.IMAGE, product.packageImage);
    return product._id;
  }
}
