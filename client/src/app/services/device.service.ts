import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceResponse } from '../models/device-response';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _loginUrl: string = 'http://localhost:3333/settings';

  constructor(private _httpClient: HttpClient,
              private _localStorageService: LocalStorageService) { }

  save(city: any): Observable<DeviceResponse> {
    let token = this._localStorageService.getToken();
    let userId = this._localStorageService.getUserId();
    const headers = new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Authorization', `Bearer ${token}`);
    return this._httpClient.post<DeviceResponse>(`${this._loginUrl}`, { 'userId': userId, 'city': city?.city }, { 'headers': headers });
  }

  getCityRegistered(): Observable<DeviceResponse> {
    let token = this._localStorageService.getToken();
    const headers = new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Authorization', `Bearer ${token}`);
    return this._httpClient.get<DeviceResponse>(`${this._loginUrl}`, { 'headers': headers });
  }
}
