import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [ConfigModule.forRoot(), FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
