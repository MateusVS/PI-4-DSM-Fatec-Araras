import { ApiWeatherListResponse } from './../models/api-weather-list-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiWeatherResponse } from '../models/api-weather-response';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  private _url: string = 'https://api.openweathermap.org/data/2.5/weather';
  private _urlWithMoreDays: string = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&';

  constructor(private _httpClient: HttpClient,
              private _localStorageService: LocalStorageService) { }

  public getWeather(): Observable<ApiWeatherResponse> {
    let city = this._localStorageService.getCity();
    return this._httpClient.get<ApiWeatherResponse>(`${this._url}?units=metric&q=${city}&appid=b9795f9d42196457a8d78fdc7c9db77f&lang=pt_br`);
  }

  public getWeatherWithMoreDays(): Observable<ApiWeatherListResponse> {
    let city = this._localStorageService.getCity();
    return this._httpClient.get<ApiWeatherListResponse>(`${this._urlWithMoreDays}q=${city}&cnt=32&appid=b9795f9d42196457a8d78fdc7c9db77f&lang=pt_br`);
  }  
}
