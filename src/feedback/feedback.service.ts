import { Injectable } from '@nestjs/common';
import { FeedbackData } from './feedback.model';

@Injectable()
export class FeedbackService {
  private feedback: FeedbackData[] = [];

  getAllFeedback() {
    return this.feedback;
  }

  creatFeedback(dateTime: Date,
    name: string,
    email: string,
    subject: string,
    details: string): FeedbackData {

    const feedbackData: FeedbackData = {
      id: Math.random().toString(),
      dateTime: dateTime,
      name: name,
      email: email,
      subject: subject,
      details: details,
    };

    this.feedback.push(feedbackData);
    return feedbackData;
  }
}
