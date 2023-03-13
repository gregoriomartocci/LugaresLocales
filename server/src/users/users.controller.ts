import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }
}
