import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      timeout: 100000,
      baseURL: 'https://its62.ru/static-cache/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
