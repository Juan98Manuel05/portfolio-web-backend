import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(
    process.env.MONGO_URI || 'mongodb+srv://manuel:DQT5s8ZWpAXYr3XX@cluster1.ig6qobo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
