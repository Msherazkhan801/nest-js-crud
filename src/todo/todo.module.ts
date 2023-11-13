import { Module } from '@nestjs/common';

import { ProductsController } from './todo.controller';
import { ProductsService } from './todo.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
