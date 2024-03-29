import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common'
import { FeedbackData } from './feedback.model'
import { HttpService } from '@nestjs/axios'
import { catchError, Observable, map, tap } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { secretesFactory } from '../utils/secretesFactory'

@Injectable()
export class FeedbackService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly httpService: HttpService) { }

  getAllFeedback(): FeedbackData {
    Logger.log('info get all feedback')
    try {
      const res = {
        id: 'example id',
        dateTime: new Date(),
        name: 'string',
        email: 'string',
        subject: 'string',
        details: 'string',
      }

      return res
    } catch (error) {
      Logger.error('Error in getAllFeedback', error)
    }
  }

  async mondayapi(): Promise<object> {
    try {
      const res = await secretesFactory('google')
      const headers = {
        'Content-Type': 'application/json',
        Authorization: res,
      }
      return headers
    } catch (error) {
      Logger.error('Error in mondayapi:', error)
      throw new HttpException(
        'Failed to get Monday API headers from Google secretes store.',
        HttpStatus.SERVICE_UNAVAILABLE,
      )
    }
  }

  async createFeedback(
    dateTime: Date,
    name: string,
    email: string,
    subject: string,
    details: string,
  ): Promise<any> {
    try {
      const feedbackData: FeedbackData = {
        id: uuid(),
        dateTime: dateTime,
        name: name,
        email: email,
        subject: subject,
        details: details,
      }

      const headers = await this.mondayapi()
      return this.sendFeedbackToMonday(feedbackData, headers)
    } catch (error) {
      Logger.error('Error in createFeedback:', error)
      throw new HttpException(
        'Failed to send feedback to Monday.',
        HttpStatus.SERVICE_UNAVAILABLE,
      )
    }
  }

  sendFeedbackToMonday(
    feedbackData: FeedbackData,
    headers: any,
  ): Observable<any> {
    const today = new Date().toISOString().split('T')[0]

    const vars = {
      myItemName: feedbackData.name,
      column_values: JSON.stringify({
        date4: today,
        status: { label: 'Add to backlog' },
        email: { email: feedbackData.email, text: feedbackData.email },
        text8: feedbackData.subject,
        long_text: feedbackData.details,
        text6: feedbackData.id,
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
          variables: JSON.stringify(vars),
        },
        {
          headers: headers,
        },
      )
      .pipe(
        catchError((error: any) => {
          Logger.error('Error in sendFeedbackToMonday:', error)
          throw new HttpException(
            'Error in Monday API',
            HttpStatus.SERVICE_UNAVAILABLE,
          )
        }),
        tap((response) => Logger.log('info', response.data)),
        map((response) => response.data),
      )
  }
}
