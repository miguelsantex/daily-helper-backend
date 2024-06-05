import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AuthHelper } from 'src/database/helpers/auth.helper';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, AuthHelper]
})
export class UsersModule { }
