import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  async create(userDto: UserDto): Promise<User> {
    const newUser = new User();
    newUser.firstName = userDto.firstName;
    newUser.lastName = userDto.lastName;
    newUser.email = userDto.email;
    newUser.password = userDto.password;
    return this.userRepository.create(newUser);
  }

  async update(id: number, userDto: UserDto): Promise<User> {
    const user = await this.userRepository.findById(id);
    user.firstName = userDto.firstName;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.password = userDto.password;
    return this.userRepository.create(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
