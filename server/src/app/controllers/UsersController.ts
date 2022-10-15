import { Request, Response } from 'express';
import { User } from '../models/User';

class UserController {
  // async findAll(req: Request, res: Response) {

  // }

  // async findOne(req: Request, res: Response) {

  // }

  async create(req: Request, res: Response) {
    await User.create(req.body)
      .then((data) => res.status(201).json({ data }))
      .catch((error) => res.status(500).json({ error: error }));
  }

  // async update(req: Request, res: Response) {

  // }

  // async destroy(req: Request, res: Response) {

  // }
}

export default new UserController();
