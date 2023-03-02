import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User> {
    return this.repository.findOne({
      where: { username: username },
    } as FindOneOptions<User>);
  }

  async findById(id: number): Promise<User> {
    return this.repository.findOne({ where: { id } });
  }

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async find(): Promise<User[]> {
    return this.repository.find();
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
