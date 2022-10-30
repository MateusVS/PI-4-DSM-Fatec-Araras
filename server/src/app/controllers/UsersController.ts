import { Request, Response } from 'express';
import ListUsersUseCase from '@useCases/usersUseCases/ListUsersUseCase';
import CreateUserUseCase from '@useCases/usersUseCases/CreateUserUseCase';
import DestroyUserUseCase from '@useCases/usersUseCases/DestroyUserUseCase';
import ShowUserUseCase from '@useCases/usersUseCases/ShowUserUseCase';
import UpdateUserUseCase from '@useCases/usersUseCases/UpdateUserUseCase';
import IUser from '@models/interfaces/IUsers';

class UserController {
  async index(_req: Request, res: Response) {
    const listUsersUseCase = new ListUsersUseCase();

    const users = await listUsersUseCase.execute();
    const statusCode = users.length > 0 ? 200 : 204;

    return res.status(statusCode).json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const showUserUseCase = new ShowUserUseCase();

    const user = await showUserUseCase.execute(Number(id));

    return res.status(200).json(user)
  }

  async create(req: Request, res: Response) {
    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute(req.body);

    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;

    const updateUserUseCase = new UpdateUserUseCase();

    await updateUserUseCase.execute({ id, name, email, password } as IUser);

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const destroyUserUseCase = new DestroyUserUseCase();

    await destroyUserUseCase.execute(Number(id));

    return res.status(204).send();
  }
}

export default new UserController();
