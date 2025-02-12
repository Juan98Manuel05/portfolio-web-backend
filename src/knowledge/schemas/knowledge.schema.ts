import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false })
export class Knowledge extends Document{
    @Prop({ default: true })
    active: boolean

    @Prop({required: true})
    icon: string

    @Prop({required: true})
    name: string

    @Prop({required: true})
    description: string

    @Prop({strings:[String]})
    frameworks: [string]

    @Prop({required: true, strings: [String]})
    tags: [string]

    @Prop({required: true})
    action: string

    @Prop()
    favorite: boolean
}

export const KnowledgeSchema = SchemaFactory.createForClass(Knowledge)