import { ISettings } from '@models/interfaces/ISettings';
import SettingsRepository from '@models/repositories/SettingsRepository';

class CreateSettingsUseCase {
  public async execute(settings: ISettings): Promise<ISettings> {
    const newSettings = await SettingsRepository.create(settings);

    return newSettings;
  }
}

export default CreateSettingsUseCase;
