import { Router } from 'express';
import usersRoutes from './users.routes';
import authRoutes from './auth.routes';
import eventRoutes from './events.routes';
import weatherForecastRoutes from './weatherForecast.routes';
import settingsRoutes from './settings.routes';

const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/events', eventRoutes);
routes.use('/weather-forecast', weatherForecastRoutes);
routes.use('/settings', settingsRoutes);

export default routes;
