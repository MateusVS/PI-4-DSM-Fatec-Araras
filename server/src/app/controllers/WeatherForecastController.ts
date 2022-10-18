import { Request, Response } from "express";
import OpenWeatherService from "../services/openWeatherService";

class WeatherForecastController {
  async GetWeatherForecast(req: Request, res: Response) {
    const weatherForecastService = new OpenWeatherService();

    await weatherForecastService
      .getWeatherForecast("araras")
      .then((data) => res.status(200).json({ data }))
      .catch((error) => res.status(500).json({ error: error }));
  }
}

export default new WeatherForecastController();
