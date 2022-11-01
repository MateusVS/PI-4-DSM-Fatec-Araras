import IUser from '@models/interfaces/IUser';
import IAuth from '@models/interfaces/IAuth';
import UserRepository from '@models/repositories/UserRepository';
import AppError from 'src/utils/errors/AppError';
import jwt from 'jsonwebtoken';
import auth, { IJwt } from '@config/auth';

class AuthUseCase {
  public async execute(user: IUser): Promise<IAuth> {
    const userAuthenticated = await this.checkAuthCredentials(user);

    const token = this.generateToken(userAuthenticated.id);

    return {
      user_id: userAuthenticated.id,
      user_name: userAuthenticated.name,
      token,
    };
  }

  private async checkAuthCredentials(user: IUser): Promise<IUser> {
    const userExists = await UserRepository.findByEmail(user.email);

    if (!userExists) throw new AppError('O e-mail informado não esta cadastrado!');

    if (!UserRepository.validatePassword(userExists.password, user.password))
      throw new AppError('O e-mail informado não esta cadastrado!');

    return userExists;
  }

  private generateToken(user_id: number): string {
    const { secret, ttl } = auth as IJwt;
    return jwt.sign({ id: user_id }, secret, {
      expiresIn: ttl,
    });
  }
}

export default AuthUseCase;
