import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import auth, { IJwt } from '@config/auth';

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);

  const token = authorization.replace('Bearer', '').trim();

  try {
    const { secret } = auth as IJwt;
    const data = jwt.verify(token, secret);

    const { id } = data as ITokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.sendStatus(401);
  }
}
