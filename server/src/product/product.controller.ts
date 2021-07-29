import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { ObjectId } from 'mongoose';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'pillImage', maxCount: 1 },
      { name: 'packageImage', maxCount: 1 },
    ]),
  )
  createProduct(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { pillImage, packageImage } = files;
    const getImageOrNull = (img) => (img ? img[0] : null);
    return this.productService.createProduct(
      dto,
      getImageOrNull(pillImage),
      getImageOrNull(packageImage),
    );
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.productService.search(query);
  }

  @Get('/type/:type')
  getProductsWithParams(@Param('type') type: string) {
    return this.productService.getProductsWIthParams(type);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.productService.getOneProduct(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.productService.delete(id);
  }
}
