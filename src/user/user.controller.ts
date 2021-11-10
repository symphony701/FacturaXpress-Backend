import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserdto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }
  @Get('validation/:user/:password')
  async validateUser(
    @Param('user') user: string,
    @Param('password') password: string,
  ) {
    return await this.userService.validateUser(user, password);
  }
  @Post()
  createUser(@Body() user: CreateUserdto) {
    return this.userService.createUser(user);
  }
}
