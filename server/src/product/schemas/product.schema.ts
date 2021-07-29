import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  activeSubstance: string;

  @Prop()
  description: string;

  @Prop()
  isBestseller: boolean;

  @Prop()
  doses: string;

  @Prop()
  pillImage: string;

  @Prop()
  packageImage: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
