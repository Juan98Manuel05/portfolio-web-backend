import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Blog extends Document{

    @Prop({default: true})
    active: boolean
    
    @Prop({required: true})
    author: string

    @Prop({required: true})
    title: string

    @Prop({required: true})
    tag: string

    @Prop({required: true})
    shortDescription: string

    @Prop({required: true})
    content: string

    @Prop({required: true})
    createdAt: string

}

export const BlogSchema = SchemaFactory.createForClass(Blog)