import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class OpenWeatherService {
  apiKey = process.env.OPEN_WEATHER_KEY as string;
  baseUrl = "https://api.openweathermap.org";

  async getWeatherForecast(city: string): Promise<Array<string>> {
    const endpoint = `${this.baseUrl}/data/2.5/weather?q=${city}&appid=${this.apiKey}&lang=pt_br`;

    let response: AxiosResponse<any, any>;

    try {
      response = await axios.get(endpoint);
    } catch {
      return [];
    }

    return response.data;
  }
}
