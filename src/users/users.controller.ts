import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('')
  async createUser(
    @Body() data: User,
  ): Promise<any> {
    return await this.userService.create(data);
  }
}
