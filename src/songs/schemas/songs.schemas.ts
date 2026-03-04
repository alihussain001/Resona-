import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SongDocument = Song & Document;

@Schema({timestamps: true})

export class Song{
    @Prop({required: true})
    title!: string;

    @Prop({required: true})
    artist!: string;

    @Prop({required: true})
    album!: string;

    @Prop({required: true})
    genre!: string;

    @Prop({required: true})
    releasedYear!: number;

    @Prop({required: true})
    playCount!: number;
}

export const SongSchema = SchemaFactory.createForClass(Song);