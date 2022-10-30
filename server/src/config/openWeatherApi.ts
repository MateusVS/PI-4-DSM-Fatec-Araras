import 'dotenv/config';

export interface IOpenWeatherApiConfig {
  apiKey: string;
  baseUrl: string;
}

export default {
  apiKey: process.env.OPEN_WEATHER_KEY as string,
  baseUrl: 'https://api.openweathermap.org',
}
