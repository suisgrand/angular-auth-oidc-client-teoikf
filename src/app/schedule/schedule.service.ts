import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { ISchedule } from './interfaces';
import { ConfigurationService } from '../core/configuration.service';

@Injectable()
export class ScheduleService {
  constructor(private _configurationService: ConfigurationService,
    private _httpClient: HttpClient, ) { }

  getSchedule(): Observable<ISchedule> | any {
    return this._httpClient.get<any>(this._configurationService.scheduleApiUrl)
      .pipe(
        tap(d => { console.log('tap schedule=', d) }),
        map(d => d.data)
      );
  }

}