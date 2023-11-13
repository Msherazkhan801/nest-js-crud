import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { config } from './orm.config';
import { ProductsModule } from './todo/todo.module';
@Module({
  imports: [ConfigModule.forRoot(config), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
