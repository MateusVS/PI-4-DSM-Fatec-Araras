import SettingsRepository from '@models/repositories/SettingsRepository';
import AppError from 'src/utils/errors/AppError';

class DestroySettingsUseCase {
  public async execute(id: number): Promise<void> {
    const checkIfSettingsRegister = await SettingsRepository.findById(id);

    if (!checkIfSettingsRegister) throw new AppError('A configuração informada não existe', 400);

    await SettingsRepository.destroySettings(id);
  }
}

export default DestroySettingsUseCase;
