import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Studies } from "./schemas/studies.schema";
import { Model } from "mongoose";

@Injectable()
export class StudiesService{
    constructor (@InjectModel(Studies.name) private studiesModel: Model<Studies>){}

    async findAll(): Promise<Studies[]> {
        return this.studiesModel.find().exec()
    }
}