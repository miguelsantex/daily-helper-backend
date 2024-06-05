// src/middleware/auth.middleware.ts
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { AuthHelper } from 'src/database/helpers/auth.helper';

export interface CustomRequest extends Request {
  user?: any;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthHelper) { }

  use(req: CustomRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new HttpException('Token não fornecido', HttpStatus.UNAUTHORIZED);
    }

    const token = authHeader.split(' ')[1];
    try {

      const decoded = this.authService.verifyToken(token);
      req.user = decoded;
      next();
    } catch (e) {
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }
  }
}

