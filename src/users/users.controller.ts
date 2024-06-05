import { Controller, Post, Body, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/interfaces/user.interface';
import { CustomRequest } from 'src/middlewares/auth.middleware';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('')
  async createUser(
    @Body() data: User,
  ): Promise<any> {
    return await this.userService.create(data);
  }

  @Post('/login')
  async login(
    @Body() data: any,
  ): Promise<any> {
    return await this.userService.login(data);
  }

  @Put('/change-password')
  async updatePassword(
    @Body() data: any,
  ): Promise<Event> {

    return await this.userService.updatePassword(data.email, data.password, data.newPassword);
  }
}
