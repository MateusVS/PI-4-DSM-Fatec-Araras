import IUser from '@models/interfaces/IUsers';
import UserRepository from '@models/repositories/UserRepository';

class ListUsersUseCase {
  public async execute(): Promise<IUser[]> {
    const users: IUser[] = await UserRepository.findAllWithouthPassword();

    return users;
  }
}

export default ListUsersUseCase;
