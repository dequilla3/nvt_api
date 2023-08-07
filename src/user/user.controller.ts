import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/model/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getUsers')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('createUser')
  async create(@Body() user: User) {
    return this.userService.create(user);
  }
}
