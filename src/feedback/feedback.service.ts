import { Injectable, Logger } from '@nestjs/common';
import { FeedbackData } from './feedback.model';
import { HttpService } from '@nestjs/axios';
import { catchError, Observable, map, tap } from 'rxjs';
import { uuid } from 'uuidv4';
@Injectable()
export class FeedbackService {
  constructor(private readonly httpService: HttpService) { }

  getAllFeedback(): Observable<FeedbackData[]> {
    Logger.log('info get all feedback');
    return this.httpService
      .get('https://test-api-lvpopocrba-nw.a.run.app/feedback')
      .pipe(map((response) => response.data));
  }

  creatFeedback(
    dateTime: Date,
    name: string,
    email: string,
    subject: string,
    details: string,
  ): Observable<FeedbackData> {
    const feedbackData: FeedbackData = {
      id: uuid(),
      dateTime: dateTime,
      name: name,
      email: email,
      subject: subject,
      details: details,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxNjc0MDM0OSwidWlkIjozNzc4OTUxMSwiaWFkIjoiMjAyMy0wMS0wNFQxMToxMDoxNS4zNTJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTQ2NTgyNTksInJnbiI6InVzZTEifQ.UfFLrhJT67Grh6q5WsQUNyesDtC1N4zY2Q2YiYJ7nUk',
    };

    const today = new Date().toISOString().split("T")[0]

    const vars = {
      myItemName: feedbackData.name,
      column_values: JSON.stringify({
        date4: today,
        status: { label: 'Add to backlog' },
        email: { email: feedbackData.email, text: feedbackData.email },
        text8: feedbackData.subject,
        long_text: feedbackData.details,
        text6: feedbackData.id
      }),
    }
    const mondayMutation5 = `mutation ($myItemName: String!, $column_values: JSON!){ create_item(board_id: 3748755036, group_id: "topics", item_name: $myItemName, 
        column_values: $column_values
        ) {  id  }  }`

    return this.httpService
      .post(
        'https://api.monday.com/v2',
        {
          query: mondayMutation5,
          variables: JSON.stringify(vars)
        },
        {
          headers: headers,
        },
      )
      .pipe(
        catchError((error: any) => {
          Logger.error(error.response.data);
          throw 'An error happened!';
        }),
        tap((response) => Logger.log('info', response.data)),

        map((response) => response.data),
      );
  }
}
