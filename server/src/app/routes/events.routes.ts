import { Router } from 'express';
import authMiddleware from '@middlewares/auth';
import EventsController from '@controllers/EventsController';

const eventsRoutes = Router();

eventsRoutes.post('/', EventsController.create);
eventsRoutes.patch('/', authMiddleware, EventsController.updateEventComment);

export default eventsRoutes;
