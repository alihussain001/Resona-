import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SaveSearchLogDocument = SaveSearchLog & Document;

@Schema()
export class SaveSearchLog {
  @Prop()
  query!: string;
  @Prop()
  totalSearches!: number;
  @Prop()
  totalResult!: number;
  @Prop()
  lastSearchAt!: Date;
  @Prop()
  resultCount!: number;
}

export const SaveSearchLogSchema = SchemaFactory.createForClass(SaveSearchLog);
