import { ISettings } from '@models/interfaces/ISettings';
import SettingsRepository from '@models/repositories/SettingsRepository';
import AppError from 'src/utils/errors/AppError';

class UpdateSettingsUseCase {
  public async execute(settings: ISettings): Promise<void> {
    const checkSettingsRegister = await SettingsRepository.findById(settings.id);

    if (!checkSettingsRegister) throw new AppError('A configuração informada não existe', 400);

    await SettingsRepository.updateSettings(settings);
  }
}

export default UpdateSettingsUseCase;
