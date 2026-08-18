import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return 'All Users';
  }
  @Get(':id')
  getUserById(@Param('id') id: string): string {
    return `User with ID: ${id}`;
  }
  @Get('search')
  getUserSearch(@Query('name') name: string, @Query('age') age: string) {
    return `User with name: ${name} and age: ${age}`;
  }
}
