import { Router } from "express";
import usersRoutes from "./users.routes";
import authRoutes from "./auth.routes";
import weatherForecastRoutes from "./weatherForecast.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);
routes.use("/weather-forecast", weatherForecastRoutes);

export default routes;
