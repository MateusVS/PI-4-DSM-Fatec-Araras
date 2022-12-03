import axios from 'axios';
import apiConfig, { IOpenWeatherApiConfig } from '../../config/openWeatherApi';
import AppError from '../../utils/errors/AppError';

export interface IApiResult {
  coord: {
    lon: number,
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default class OpenWeatherService {
  public static async getWeatherForecast(city: string): Promise<IApiResult | Array<null>> {
    const { baseUrl, apiKey }: IOpenWeatherApiConfig = apiConfig;
    const endpoint = `${baseUrl}/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}&lang=pt_br`;

    let response;

    try {
      response = await axios.get(endpoint);
    } catch {
      throw new AppError('Ocorreu uma falha ao buscar os dados climáticos da sua localização atual', 500);
    }

    return response.data;
  }
}
