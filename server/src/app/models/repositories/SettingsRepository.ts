import { Settings } from '@models/entities/Settings';
import { ISettings } from '@models/interfaces/ISettings';
import AppError from 'src/utils/errors/AppError';

class SettingsRepository extends Settings {
  public static async findById(settings_id: number): Promise<ISettings | null> {
    return await Settings.findOne({
                          where: {
                            id: settings_id,
                          },
                        })
                        .then(data => data)
                        .catch(error => {
                          throw new AppError(error, 500);
                        });
  }

  public static async createSettings(settings: ISettings): Promise<ISettings> {
    return await Settings.create(settings)
                .then(data => data)
                .catch(error => {
                  throw new AppError(error, 500);
                });
  }

  public static async updateSettings(settings: ISettings): Promise<void> {
    await Settings.update(settings, {
                            where: {
                              id: settings.id,
                            },
                          })
                          .then(data => data)
                          .catch(error => {
                            throw new AppError(error, 500);
                          });
  }

  public static async destroySettings(settings_id: number): Promise<void> {
    await Settings.destroy({
                    where: {
                      id: settings_id,
                    },
                  })
                  .catch(error => {
                    throw new AppError(error, 500);
                  });
  }
}

export default SettingsRepository;
