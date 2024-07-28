import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Works } from "./schemas/works.schema";
import { Model } from "mongoose";

@Injectable()
export class WorksService{
    constructor(@InjectModel(Works.name) private worksModel: Model<Works>){}

    async findAll(): Promise<Works[]> {
        return this.worksModel.find().exec()
    }
}