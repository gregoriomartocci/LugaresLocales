import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User> {
    return this.repository.findOne({ where: { username } });
  }

  async findById(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }
}
