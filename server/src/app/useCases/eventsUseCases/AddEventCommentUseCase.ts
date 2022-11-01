import EventRepository from '@models/repositories/EventRepository';
import AppError from 'src/utils/errors/AppError';

class AddEventCommentUseCase {
  public async execute(event_id: number, comments: string): Promise<void> {
    const eventExists = await EventRepository.findById(event_id);

    if (!eventExists) throw new AppError('O evento informado não existe', 400);

    await EventRepository.addEventComment(event_id, comments);
  }
}

export default AddEventCommentUseCase;
