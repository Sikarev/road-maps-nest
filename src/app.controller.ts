import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('roads')
  async roads(): Promise<any> {
    const { data } = await firstValueFrom(this.appService.getRoads());
    return data;
  }

  @Get('devices')
  async devices(): Promise<any> {
    const { data } = await firstValueFrom(this.appService.getDevices());
    return data;
  }
}
