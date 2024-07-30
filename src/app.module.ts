import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudiesModule } from './studies/studies.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { WorksModule } from './works/works.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI),
    BlogModule,
    StudiesModule,
    KnowledgeModule,
    WorksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
