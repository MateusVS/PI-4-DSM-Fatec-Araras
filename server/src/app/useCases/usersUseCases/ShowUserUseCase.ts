import IUser from '@models/interfaces/IUsers';
import UserRepository from '@models/repositories/UserRepository';
import AppError from 'src/utils/errors/AppError';

class ShowUserUseCase {
  public async execute(id: number): Promise<IUser> {
    const user = await UserRepository.findById(id);

    if (!user) throw new AppError('O usuário informado não existe', 400);

    return user;
  }
}

export default ShowUserUseCase;
