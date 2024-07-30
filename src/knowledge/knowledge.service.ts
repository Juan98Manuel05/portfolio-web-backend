import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Knowledge } from "./schemas/knowledge.schema";
import { Model } from "mongoose";


@Injectable()
export class KnowledgeService{
    constructor (@InjectModel(Knowledge.name) private knowledgeModel: Model<Knowledge>){}

    async find(params:{}): Promise<Knowledge[]> {
        if(!params)
            return this.knowledgeModel.find().exec()

       return this.knowledgeModel.find({...params}).exec()
    }
    
    async Add( knowledge: Knowledge): Promise<Knowledge> {
        const newKnowledge = new this.knowledgeModel(knowledge)
        return newKnowledge.save()
    }
}