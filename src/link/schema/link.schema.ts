import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LinkDocument = Link & Document;

export type LinkDetailValueType = string | Date;

@Schema()
export class Link {
  @Prop()
  details: Types.Map<LinkDetailValueType>;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
