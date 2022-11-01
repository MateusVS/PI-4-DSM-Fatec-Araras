import IEvent from '@models/interfaces/IEvent';
import EventRepository from '@models/repositories/EventRepository';

class CreateEventUseCase {
  public async execute(event: IEvent): Promise<IEvent> {
    const newEvent = EventRepository.create(event);

    return newEvent;
  }
}

export default CreateEventUseCase;
