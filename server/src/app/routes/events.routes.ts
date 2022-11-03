import { Router } from 'express';
import authMiddleware from '@middlewares/auth';
import EventsController from '@controllers/EventsController';

const eventsRoutes = Router();

eventsRoutes.get('/', authMiddleware, EventsController.index);
eventsRoutes.get('/:id', authMiddleware, EventsController.show);
eventsRoutes.post('/', EventsController.create);
eventsRoutes.patch('/:id', authMiddleware, EventsController.updateEventComment);

export default eventsRoutes;
