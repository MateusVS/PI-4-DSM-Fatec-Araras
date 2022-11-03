import IEvent from '@models/interfaces/IEvent';
import EventRepository from '@models/repositories/EventRepository';

class ListEventsUseCase {
  public async execute(userId: number): Promise<IEvent[]> {
    const events = await EventRepository.findEventByUser(userId);

    return events;
  }
}

export default ListEventsUseCase;
