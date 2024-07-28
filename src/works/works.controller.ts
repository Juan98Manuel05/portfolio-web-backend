import { Controller, Get } from "@nestjs/common";
import { Works } from "./schemas/works.schema";
import { WorksService } from "./works.service";


@Controller('works')
export class WorksController{
    
    constructor(private readonly worksService: WorksService){}

    @Get('list')
    async findAll(): Promise<Works[]>{
        return this.worksService.findAll()
    }
    
}