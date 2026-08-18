import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAllUsers(): { id: number; name: string }[] {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string): { id: number; name: string } {
    return this.userService.getUserById(Number(id));
  }
  @Get('search')
  getUserSearch(@Query('name') name: string, @Query('age') age: string) {
    return `User with name: ${name} and age: ${age}`;
  }
  @Post()
  create(@Body() body: any) {
    return this.userService.createUser(body.name);
  }
}
