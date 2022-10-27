import IUser from '@models/interfaces/IUsers';
import UserRepository from '@models/repositories/UserRepository';
import AppError from 'src/utils/errors/AppError';

class UpdateUserUseCase {
  public async execute(id: number, user: IUser): Promise<void> {
    const checkIfUserRegister = await UserRepository.findById(id);

    if (!checkIfUserRegister) throw new AppError('O usuário informado não existe', 400);

    await UserRepository.updateUser(user);
  }
}

export default UpdateUserUseCase;
