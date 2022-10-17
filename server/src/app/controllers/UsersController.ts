import { Request, Response } from "express";
import { User } from "../models/User";

class UserController {
  async findAll(req: Request, res: Response) {
    await User.findAll()
      .then((data) =>
        data.length > 0
          ? res.status(200).json({ data })
          : res.status(204).send()
      )
      .catch((error) => res.status(500).json({ error: error }));
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    await User.findOne({
      where: {
        id: id,
      },
    })
      .then((data) =>
        data ? res.status(200).json({ data }) : res.status(204).send()
      )
      .catch((error) => res.status(500).json({ error: error }));
  }

  async create(req: Request, res: Response) {
    await User.create(req.body)
      .then((data) => res.status(201).json({ data }))
      .catch((error) => res.status(500).json({ error: error }));
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    await User.update(req.body, {
      where: {
        id: id,
      },
      individualHooks: true,
    })
      .then(() => res.status(204).send())
      .catch((error) => res.status(500).json({ error: error }));
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.status(204).send())
      .catch((error) => res.status(500).json({ error: error }));
  }
}

export default new UserController();
