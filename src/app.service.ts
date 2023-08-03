import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getDevices(): Observable<AxiosResponse> {
    return this.httpService.get(
      'https://its62.ru/static-cache/inform_devices.json',
    );
  }

  getRoads(): Observable<AxiosResponse> {
    return this.httpService.get('https://its62.ru/static-cache/roads.json');
  }
}
