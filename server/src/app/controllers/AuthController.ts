import { Request, Response } from 'express';
import AuthUseCase from '@useCases/authUseCases/AuthUseCase';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const authUseCase = new AuthUseCase();

    return res.json(await authUseCase.execute(req.body));
  }
}

export default new AuthController();
