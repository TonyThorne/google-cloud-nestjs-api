import {
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { FeedbackData } from './feedback.model'
import { FeedbackService } from './feedback.service'

@Controller('feedback')
export class FeedbackController {
  // eslint-disable-next-line prettier/prettier
  constructor(private feedbackService: FeedbackService) { }

  @Get()
  getAllFeedback(): FeedbackData {
    return this.feedbackService.getAllFeedback()
  }

  // @Post()
  // async createFeedback(
  //   @Body('dateTime') dateTime: Date,
  //   @Body('name') name: string,
  //   @Body('email') email: string,
  //   @Body('subject') subject: string,
  //   @Body('details') details: string,
  // ): Promise<Observable<FeedbackData>> {
  //   try {
  //     const result = await this.feedbackService.createFeedback(
  //       dateTime,
  //       name,
  //       email,
  //       subject,
  //       details,
  //     )
  //     return result
  //   } catch (error) {
  //     throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
  // }
}
