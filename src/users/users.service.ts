import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ivan', bio: 'some bio' },
    { id: 2, name: 'Alex', bio: 'some bio' },
    { id: 3, name: 'Petr', bio: 'some bio' },
  ];
  getAllUsers(): { id: number; name: string; bio: string }[] {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User with id not found');
    }
    return user;
  }
  createUser(body: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name: body.name,
      bio: body.bio,
    };
    this.users.push(newUser);
    return newUser;
  }
}
