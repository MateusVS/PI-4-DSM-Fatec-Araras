import { Event } from '@models/entities/Event';
import IEvent from '@models/interfaces/IEvent';
import AppError from 'src/utils/errors/AppError';

class EventRepository extends Event {
  public static async createEvent(event: IEvent): Promise<IEvent> {
    return await Event.create(event)
                .then(data => data)
                .catch(error => {
                  throw new AppError(error, 500);
                });
  }

  public static async findById(id: number): Promise<IEvent | null> {
    return Event.findOne({
                    where: {
                      id
                    },
                  })
                  .then(data => data)
                  .catch(error => {
                    throw new AppError(error, 500);
                  });
  }

  public static async addEventComment(event_id: number, comment: string): Promise<void> {
    await Event.update({ comments: comment }, {
                            where: {
                              id: event_id,
                            },
                          })
                          .then(data => data)
                          .catch(error => {
                            throw new AppError(error, 500);
                          });
  }
}

export default EventRepository;
