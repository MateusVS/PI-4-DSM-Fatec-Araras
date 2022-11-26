import { MainResponse } from './main-response';
import { WeatherResponse } from './weather-response';

export class ApiWeatherResponse {
    'dt_txt': string;
    'weather': WeatherResponse[];
    'main': MainResponse;
}