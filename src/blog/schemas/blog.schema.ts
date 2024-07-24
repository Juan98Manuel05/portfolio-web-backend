import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Blog extends Document{

    @Prop()
    active: boolean
    
    @Prop({ required: true})
    author: string

    @Prop()
    title: string

    @Prop()
    tag: string

    @Prop()
    shortDescription: string

    @Prop()
    content: string

    @Prop()
    createdAt: string

}

export const BlogSchema = SchemaFactory.createForClass(Blog)