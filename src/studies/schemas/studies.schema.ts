import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Studies extends Document{

    @Prop()
    active: boolean

    @Prop()
    bachelor_degree: string

    @Prop()
    college: string

    @Prop()
    date: string

    @Prop()
    icon: string

    @Prop()
    class: string

}

export const StudiesSchema = SchemaFactory.createForClass(Studies)