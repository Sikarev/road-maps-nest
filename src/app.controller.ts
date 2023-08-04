import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { Road } from './models/Road';
import { Device } from './models/Devices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('roads')
  async roads(): Promise<Road[]> {
    const { data } = await firstValueFrom(this.appService.getRoads());
    data.forEach((road) => {
      road.coordinates[0]?.forEach((yx) => yx.reverse());
    });
    return data;
  }

  @Get('devices')
  async devices(): Promise<Device[]> {
    const { data } = await firstValueFrom(this.appService.getDevices());
    return data;
  }
}
