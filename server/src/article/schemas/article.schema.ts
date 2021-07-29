import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  date: string;

  @Prop()
  picture: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
