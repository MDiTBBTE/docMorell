import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
    private fileService: FileService,
  ) {}

  async createArticle(dto: CreateArticleDto, picture): Promise<Article> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

    return await this.articleModel.create({
      ...dto,
      picture: picturePath,
    });
  }
  async getAllArticles(): Promise<Article[]> {
    return this.articleModel.find();
  }
  async getArticle(id: ObjectId): Promise<Article> {
    return this.articleModel.findById(id);
  }
  async deleteArticle(id: ObjectId): Promise<Article> {
    const article = await this.articleModel.findByIdAndDelete(id);

    article.picture &&
      this.fileService.removeFile(FileType.IMAGE, article.picture);

    return article._id;
  }
}
