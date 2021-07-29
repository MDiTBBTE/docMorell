import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:docmorall@cluster0.elkh7.mongodb.net/docMorell?retryWrites=true&w=majority',
    ),
    ArticleModule,
    CategoryModule,
    ProductModule,
    FileModule,
  ],
})
export class AppModule {}
