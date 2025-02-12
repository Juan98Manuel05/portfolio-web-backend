import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { Response } from 'express';
import { KnowledgeService } from "./knowledge.service";
import { Knowledge } from "./schemas/knowledge.schema";

@Controller('knowledge')
export class KnowledgeController{
    constructor (private readonly knowledgeService: KnowledgeService){}

    @Get('list')
    async find(@Query() queryParams: Knowledge): Promise<Knowledge[]> {
        if(!queryParams)
            return this.knowledgeService.find({})

        return this.knowledgeService.find(queryParams)
    }

    @Post('add')
    async add(@Body() knowledge: Knowledge, @Res() res: Response): Promise<Object>{
        try {
            await this.knowledgeService.Add(knowledge)
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Added succesfully."
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error adding knowledge', error });
        }   
    }
}