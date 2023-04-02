import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { FeedbackModule } from './feedback/feedback.module'
import { RbacSearchModule } from './rbac-search/rbac-search.module';

@Module({
  imports: [ConfigModule.forRoot(), FeedbackModule, RbacSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
