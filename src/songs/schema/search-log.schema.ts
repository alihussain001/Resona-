import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SaveSearchLogDocument = SaveSearchLog & Document;

@Schema({timestamps: true})
export class SaveSearchLog {
  @Prop({required: true, unique: true})
  query!: string;
  @Prop({default: 0})
  resultCount!: number;
  @Prop({default: 1})
  count!: number;
}

export const SaveSearchLogSchema = SchemaFactory.createForClass(SaveSearchLog);
