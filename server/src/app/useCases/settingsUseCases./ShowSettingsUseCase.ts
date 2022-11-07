import { ISettings } from '@models/interfaces/ISettings';
import SettingsRepository from '@models/repositories/SettingsRepository';

class ShowSettingsUseCase {
  public async execute(id: number): Promise<ISettings | null> {
    const settings = await SettingsRepository.findByPk(id);

    return settings;
  }
}

export default ShowSettingsUseCase;
