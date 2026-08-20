import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user-entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User do not exist');
    }
    return user;
  }
  createUser(body: CreateUserDto) {
    const name = body.name;
    const bio = body.bio;
    const user = this.userRepository.create({ name, bio });
    return this.userRepository.save(user);
  }
}
