import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _loginUrl: string = 'http://localhost:3333/settings';

  constructor(private _httpClient: HttpClient,
              private _localStorageService: LocalStorageService) { }

  update(city: string): Observable<any> {
    let token = this._localStorageService.getToken();
    let userId = this._localStorageService.getUserId();
    return of('');
    //return this._httpClient.post<DeviceModel>(`${this._loginUrl}`, { 'user_id': userId, city });
  }
}
