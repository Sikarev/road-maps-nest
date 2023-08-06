import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Road } from './models/Road';
import { Device } from './models/Devices';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getDevices(): Observable<AxiosResponse<Device[]>> {
    return this.httpService.get('inform_devices.json');
  }

  getRoads(): Observable<AxiosResponse<Road[]>> {
    return this.httpService.get('roads.json');
  }
}
