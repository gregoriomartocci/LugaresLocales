import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectRepository(Article)
    private readonly repository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Article> {
    return this.repository.findOne({ where: { id } });
  }

  async create(article: Article): Promise<Article> {
    return this.repository.save(article);
  }

  async update(id: string, article: Article): Promise<Article> {
    await this.repository.update(id, article);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
