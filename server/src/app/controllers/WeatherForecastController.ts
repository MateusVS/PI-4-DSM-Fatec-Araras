import ShowWeatherForecastUseCase from '@useCases/WeatherForecastUseCases/ShowWeatherForecastUseCase';
import { Request, Response } from 'express';

class WeatherForecastController {
  async GetWeatherForecast(req: Request, res: Response) {
    const showWeatherForecast = new ShowWeatherForecastUseCase();

    const weatherForecastData = await showWeatherForecast.execute();

    return res.status(200).json(weatherForecastData);
  }
}

export default new WeatherForecastController();
