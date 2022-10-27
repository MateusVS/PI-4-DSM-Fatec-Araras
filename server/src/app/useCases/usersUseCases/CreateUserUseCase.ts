import IUser from '@models/interfaces/IUsers';
import UserRepository from '@models/repositories/UserRepository';

class CreateUserUseCase {
  public async execute(user: IUser): Promise<IUser> {
    const newUser = await UserRepository.createNewUser(user);

    return newUser;
  }
}

export default CreateUserUseCase;
