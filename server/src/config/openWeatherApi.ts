import 'dotenv/config';

export interface IOpenWeatherApiConfig {
  apiKey: string;
  baseUrl: string;
}

export default {
  // apiKey: process.env.OPEN_WEATHER_KEY as string,
  apiKey: 'c05b1ed7e528f107d7a7f26542535928',
  baseUrl: 'https://api.openweathermap.org',
}
