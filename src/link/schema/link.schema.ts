import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LinkDocument = Link & Document;

@Schema()
export class Link {
  @Prop()
  info: Types.Map<string>;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
