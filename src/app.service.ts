import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  obj = {};
  getHello(): string {
    return 'Hello World!';
  }
}
