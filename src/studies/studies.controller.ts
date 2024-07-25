import { Controller, Get } from "@nestjs/common";
import { StudiesService } from "./studies.service";
import { Studies } from "./schemas/studies.schema";

@Controller('studies')
export class StudiesController{
    constructor (private readonly studiesService: StudiesService){}

    @Get('list')
    async findAll(): Promise<Studies[]> {
        return this.studiesService.findAll()
    }
}