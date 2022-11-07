import AddEventCommentUseCase from '@useCases/eventsUseCases/AddEventCommentUseCase';
import CreateEventUseCase from '@useCases/eventsUseCases/CreateEventUseCase';
import ListEventsUseCase from '@useCases/eventsUseCases/ListEventsUseCase';
import ShowEventUseCase from '@useCases/eventsUseCases/ShowEventUseCase';
import { Request, Response } from 'express';

class EventsController {
  async index(req: Request, res: Response) {
    const { userId } = req.body;

    const listEventsUseCase = new ListEventsUseCase();

    const events = listEventsUseCase.execute(userId);

    return res.status(200).json(events);
  }

  async show(req: Request, res: Response) {
    const user_id = Number(req.params.user_id);

    const showEventUseCase = new ShowEventUseCase();

    const event = showEventUseCase.execute(user_id);

    return res.status(200).json(event);
  }

  async create(req: Request, res: Response) {
    const createEventUseCase = new CreateEventUseCase();

    const event = await createEventUseCase.execute(req.body);

    return res.status(200).json(event);
  }

  async updateEventComment(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { comment } = req.body;

    const addEventCommentUseCase = new AddEventCommentUseCase();

    await addEventCommentUseCase.execute(id, comment);

    return res.status(204).send();
  }
}

export default new EventsController();
