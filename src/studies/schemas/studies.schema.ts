import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Studies extends Document{

    @Prop({default: true})
    active: boolean

    @Prop({required: true})
    bachelor_degree: string

    @Prop({required: true})
    college: string

    @Prop({required: true})
    date: string

    @Prop({required: true})
    icon: string

    @Prop({required: true})
    class: string

}

export const StudiesSchema = SchemaFactory.createForClass(Studies)