import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from NestJS! this is magic! - Redeploy from Github';
  }
}
