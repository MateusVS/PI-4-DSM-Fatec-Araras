import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

    private _arduinoUrl: string = 'http://localhost:3333/arduino';

    constructor(private _httpClient: HttpClient,
                private _localStorageService: LocalStorageService) { }

    getTemperature(): Observable<number> {
        let token = this._localStorageService.getToken();
        const headers = new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Authorization', `Bearer ${token}`);
        return this._httpClient.get<number>(this._arduinoUrl, { 'headers': headers });
    }
}