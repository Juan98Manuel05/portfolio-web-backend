import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Works extends Document{
    @Prop({default: true})
    active: boolean

    @Prop({required: true})
    name: string

    @Prop({required: true})
    description: string

    @Prop({required: true, strings: [String]})
    images: [string]

    @Prop({required: true, strings: [String]})
    technologies: [string]

    @Prop({required: true, strings:[String]})
    links: [string]

}

export const WorksSchema = SchemaFactory.createForClass(Works)