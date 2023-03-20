import { Test, TestingModule } from '@nestjs/testing'
import { FeedbackController } from './feedback.controller'
import { FeedbackService } from './feedback.service'
import { FeedbackData } from './feedback.model'
import { HttpStatus, INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { of } from 'rxjs'

describe('FeedbackController', () => {
  let app: INestApplication
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let feedbackService: FeedbackService

  const feedbackData: FeedbackData[] = [
    {
      id: '1',
      dateTime: new Date(),
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test feedback',
      details: 'This is a test feedback.',
    },
  ]

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackController],
      providers: [
        {
          provide: FeedbackService,
          useValue: {
            getAllFeedback: jest.fn(() => of(feedbackData)),
            creatFeedback: jest.fn(),
          },
        },
      ],
    }).compile()

    feedbackService = moduleRef.get<FeedbackService>(FeedbackService)
    app = moduleRef.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  describe('getAllFeedback', () => {
    it('should return all feedback data', () => {
      return request(app.getHttpServer())
        .get('/feedback')
        .expect(HttpStatus.OK)
        .expect(feedbackData)
    })
  })
})
