import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-users.dto';
import { AuthGuard } from './auth.guards';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(Number(id));
  }
  @Get('search')
  getUserSearch(@Query('name') name: string, @Query('age') age: string) {
    return `User with name: ${name} and age: ${age}`;
  }
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
}
