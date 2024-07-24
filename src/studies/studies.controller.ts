import { Controller, Get } from "@nestjs/common";
import { Studies } from "./schemas/studies.schema";
import { StudiesService } from "./studies.service";

@Controller('studies')
export class StudiesController{
    constructor (private readonly studiesService: StudiesService){}

    @Get()
    async findAll(): Promise<Studies[]> {
        return this.studiesService.findAll()
    }
}