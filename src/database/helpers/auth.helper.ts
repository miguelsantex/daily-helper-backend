import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthHelper {
  private readonly jwtSecret = 'daily-helper';

  generateToken(payload: any): string {
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (e) {
      throw new Error('Token inválido');
    }
  }
}

