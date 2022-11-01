import IUser from '@models/interfaces/IUser';
import UserRepository from '@models/repositories/UserRepository';
import AppError from 'src/utils/errors/AppError';

class UpdateUserUseCase {
  public async execute(user: IUser): Promise<void> {
    const checkUserRegister = await UserRepository.findById(user.id);

    if (!checkUserRegister) throw new AppError('O usuário informado não existe', 400);

    await UserRepository.updateUser(user);
  }
}

export default UpdateUserUseCase;
