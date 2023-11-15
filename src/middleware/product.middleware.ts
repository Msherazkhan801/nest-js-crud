import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class productMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    next();
    throw new Error('Method not implemented.');
  }
}
