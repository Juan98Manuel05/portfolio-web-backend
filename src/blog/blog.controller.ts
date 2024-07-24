import { Controller, Get, Post, Body } from "@nestjs/common";
import { BlogService } from './blog.service'
import { Blog } from './schemas/blog.schema'

@Controller('blog')
export class BlogController{
    constructor(private readonly blogService: BlogService){}

    @Get()
    async findAll(): Promise<Blog[]> {
        return this.blogService.findAll()
    }

}