import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SongDocument = Song & Document;

@Schema({timestamps: true})

export class Song{
    @Prop({required: true})
    title!: string;

    @Prop({required: true})
    artist!: string;

    @Prop()
    album!: string;

    @Prop()
    genre!: string;

    @Prop()
    releasedYear!: number;

    @Prop({default: 0})
    playCount!: number;
}

export const SongSchema = SchemaFactory.createForClass(Song);