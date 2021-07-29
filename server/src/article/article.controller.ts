import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  createArticle(
    @UploadedFile() picture: Express.Multer.File,
    @Body() dto: CreateArticleDto,
  ) {
    return this.articleService.createArticle(dto, picture);
  }

  @Get()
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: ObjectId) {
    return this.articleService.getArticle(id);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: ObjectId) {
    return this.articleService.deleteArticle(id);
  }
}
