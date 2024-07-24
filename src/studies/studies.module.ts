import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StudiesController } from "./studies.controller";
import { StudiesService } from "./studies.service";
import { Studies, StudiesSchema } from "./schemas/studies.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Studies.name, schema: StudiesSchema}])],
    controllers: [StudiesController],
    providers: [StudiesService]
})

export class StudiesModule{}