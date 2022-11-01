import AddEventCommentUseCase from '@useCases/eventsUseCases/AddEventCommentUseCase';
import CreateEventUseCase from '@useCases/eventsUseCases/CreateEventUseCase';
import { Request, Response } from 'express';

class EventsController {
  async index(req: Request, res: Response) {
    const { user_id } = req.body;

    /* TODO */

    return res.status(200).json({});
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
