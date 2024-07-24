import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Blog } from "./schemas/blog.schema";

@Injectable()
export class BlogService {
    constructor (@InjectModel(Blog.name) private blogModel: Model<Blog>){}
    
    async findAll(): Promise<Blog[]> {
        return this.blogModel.find().exec()
    }
}