import { Request, Response } from "express";
import { User, validatePassword } from "../models/User";
import jwt from "jsonwebtoken";
import auth, { IJwt } from "../../config/auth";

class AuthController {
  async authenticate(req: Request, res: Response) {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) return res.status(403).json({ error: "E-mail não cadastrado!" });

    if (!validatePassword(user.getDataValue("password"), req.body.password))
      return res.status(401).json({ error: "Senha Inválida" });

    const { secret, ttl } = auth as IJwt;
    const token = jwt.sign({ id: user.getDataValue("id") }, secret, {
      expiresIn: ttl,
    });

    // delete user.password;

    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController();
