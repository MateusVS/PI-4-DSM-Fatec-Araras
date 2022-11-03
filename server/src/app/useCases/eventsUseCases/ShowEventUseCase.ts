import IEvent from '@models/interfaces/IEvent';
import EventRepository from '@models/repositories/EventRepository';

class ShowEventUseCase {
  public async execute(id: number): Promise<IEvent | null> {
    const event = await EventRepository.findByPk(id);

    return event;
  }
}

export default ShowEventUseCase;
