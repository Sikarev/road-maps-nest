import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 100000,
      baseURL: 'https://its62.ru/static-cache/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
