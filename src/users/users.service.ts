import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Petr' },
  ];
  getAllUsers(): { id: number; name: string }[] {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User with id not found');
    }
    return user;
  }
  createUser(name: string) {
    const newUser = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
}
