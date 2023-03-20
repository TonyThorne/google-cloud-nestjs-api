import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { FeedbackController } from './feedback.controller'
import { FeedbackService } from './feedback.service'

@Module({
  imports: [HttpModule],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
// eslint-disable-next-line prettier/prettier
export class FeedbackModule { }
