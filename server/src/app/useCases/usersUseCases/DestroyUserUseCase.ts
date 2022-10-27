import UserRepository from '@models/repositories/UserRepository';
import AppError from 'src/utils/errors/AppError';

class DestroyUserUseCase {
  public async execute(id: number): Promise<void> {
    const checkIfUserRegister = await UserRepository.findById(id);

    if (!checkIfUserRegister) throw new AppError('O usuário informado não existe', 400);

    await UserRepository.destroyUser(id);
  }
}

export default DestroyUserUseCase;
