import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import WeatherForecastController from "../controllers/WeatherForecastController";

const weatherForecastRoutes = Router();

weatherForecastRoutes.get(
  "/",
  authMiddleware,
  WeatherForecastController.GetWeatherForecast
);

export default weatherForecastRoutes;
