import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.path}`);
  next(); // Passe à la prochaine fonction middleware dans la pile
}