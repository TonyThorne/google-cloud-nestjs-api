import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbackData } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) { }

  @Get()
  getAllFeedback(): FeedbackData[] {
    return this.feedbackService.getAllFeedback();
  }

  @Post()
  createFeedback(
    @Body('dateTime') dateTime: Date,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('subject') subject: string,
    @Body('details') details: string,
  ): FeedbackData {
    return this.feedbackService.creatFeedback(
      dateTime,
      name,
      email,
      subject,
      details,
    );
  }
}
