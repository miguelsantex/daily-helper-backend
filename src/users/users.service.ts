import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>
  ) { }


  async create(createUserDTO: User): Promise<User> {
    createUserDTO.created_at = new Date()
    createUserDTO.updated_at = new Date()

    const createdUser = new this.userModel(createUserDTO);
    return createdUser.save();
  }
}
