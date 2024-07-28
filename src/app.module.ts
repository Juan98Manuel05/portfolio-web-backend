import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudiesModule } from './studies/studies.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { WorksModule } from './works/works.module';

@Module({
  imports: [MongooseModule.forRoot(
    process.env.MONGO_URI || 'mongodb+srv://manuel:DQT5s8ZWpAXYr3XX@cluster1.ig6qobo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'),
    BlogModule,
    StudiesModule,
    KnowledgeModule,
    WorksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
