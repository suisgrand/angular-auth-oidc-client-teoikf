import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from '../auth/authentication.service'

@Injectable()
export class ConfigurationService {

  private _isConfigured = false;
  private _configUrl = 'config.json';

  private _scheduleApiUrl: string;
  get scheduleApiUrl(): string {
    return this._scheduleApiUrl;
  }

  constructor(private _httpClient: HttpClient) {
  }

  load() {
     if (!this._isConfigured) {
      this.configureService();
    }
  }

  private configureService() {
   
    this._httpClient.get<any>(`/assets/${this._configUrl}`)
      .subscribe(d => {
        console.log('config service loaded data=', d);
        this._scheduleApiUrl = d.scheduleApi;
        this._isConfigured = true;
      })
  }

}