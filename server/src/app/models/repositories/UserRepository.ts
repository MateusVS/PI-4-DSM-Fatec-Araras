import { User } from '../entities/User';
import AppError from '../../../utils/errors/AppError';
import bcrypt from 'bcryptjs';
import IUser from '@models/interfaces/IUsers';

class UserRepository extends User {
  public static async findAllWithouthPassword(): Promise<IUser[]> {
    return await User.scope('withouthPassword').findAll()
                     .then(data => data)
                     .catch(error => {
                       throw new AppError(error, 500);
                     });
  }

  public static async findById(user_id: number): Promise<IUser | null> {
    return await User.scope('withouthPassword').findOne({
      where: {
        id: user_id,
      },
    })
    .then(data => data)
    .catch(error => {
      throw new AppError(error, 500);
    });
  }

  public async findByEmail(email: string): Promise<IUser | null>  {
    return await User.findOne({
      where: {
        email,
      },
    })
    .then(data => data)
    .catch(error => {
      throw new AppError(error, 500);
    });
  }

  public static async createNewUser(user: IUser): Promise<IUser> {
    return await User.scope('withouthPassword').create(user)
                     .then(data => data)
                     .catch(error => {
                       throw new AppError(error, 500);
                     });
  }

  public static async updateUser(user: IUser): Promise<void> {
    await User.update(user, {
                        where: {
                          id: user.id,
                        },
                        individualHooks: true,
              })
              .then(data => data)
              .catch(error => {
                throw new AppError(error, 500);
              });
  }

  public static async destroyUser(user_id: number): Promise<void> {
    await User.destroy({
      where: {
        id: user_id,
      },
    })
    .catch(error => {
      throw new AppError(error, 500);
    });
  }

  public validatePassword(
    resultPassword: string,
    userPassword: string
  ): boolean {
    return bcrypt.compareSync(userPassword, resultPassword);
  }
}

export default UserRepository;
