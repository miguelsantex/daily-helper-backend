import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthHelper } from 'src/database/helpers/auth.helper';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private authHelper: AuthHelper
  ) { }


  async create(createUserDTO: User): Promise<any> {
    createUserDTO.created_at = new Date()
    createUserDTO.updated_at = new Date()

    const createdUser = new this.userModel(createUserDTO);
    await createdUser.save()

    const token = this.authHelper.generateToken({ userID: createdUser._id, name: createdUser.name, email: createdUser.email });
    return { token };
  }

  async updatePassword(email: string, password: string, newPassword: string): Promise<any> {
    const findUser = await this.userModel.findOne({ email })

    if (password != findUser.password) {
      return new UnauthorizedException()
    }

    const updateUser = await this.userModel.updateOne({ _id: findUser._id, password: newPassword });

    return updateUser;
  }

  async login(data: any): Promise<any> {
    const findUser = await this.userModel.findOne({ email: data.email })

    if (!findUser) {
      return new UnauthorizedException()
    }

    if (data.password != findUser.password) {
      return new UnauthorizedException()
    }

    const token = this.authHelper.generateToken({ userID: findUser._id, email: findUser.email, name: findUser.name });

    return { token };
  }
}
