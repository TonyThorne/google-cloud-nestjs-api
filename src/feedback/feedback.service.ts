import { Injectable, Logger } from '@nestjs/common';
import { FeedbackData } from './feedback.model';
import { HttpService } from '@nestjs/axios';
import { catchError, Observable, map, tap } from 'rxjs';
// import { AxiosResponse } from 'axios';
@Injectable()
export class FeedbackService {
  constructor(private readonly httpService: HttpService) { }
  // private feedback: FeedbackData[] = [];

  getAllFeedback(): Observable<FeedbackData[]> {
    Logger.log('info get all feedback')
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
    Logger.log('info');
    const feedbackData: FeedbackData = {
      id: Math.random().toString(),
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

    const mondayMutation = `
    mutation($name: String) {
    create_item (board_id: 3748755036, group_id: "topics", item_name: $name
    ) {
        id
        name
}
    }`;

    return this.httpService
      .post(
        'https://api.monday.com/v2',
        { query: mondayMutation, variables: { name: feedbackData.name } },
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
