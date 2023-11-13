import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' Get Hello World!';
  }
  postHello(): string {
    return 'Post Hello World!';
  }
}
