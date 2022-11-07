import ArduinoController from '@controllers/ArduinoController';
import authMiddleware from '@middlewares/auth';
import { Router } from 'express'

const arduinoRoutes = Router();

arduinoRoutes.get('/', authMiddleware, ArduinoController.show);

export default arduinoRoutes;
