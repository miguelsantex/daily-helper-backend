import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: number;
  readonly password: string;
  created_at: Date;
  updated_at: Date;
}
