import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from './article.dto';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  async findOne(id: string): Promise<Article> {
    return this.articlesRepository.findOne({ where: { id } });
  }

  async create(ArticleDto: ArticleDto): Promise<Article> {
    const article = new Article();
    article.title = ArticleDto.title;
    article.description = ArticleDto.description;
    article.body = ArticleDto.body;
    article.date = new Date();
    return this.articlesRepository.save(article);
  }

  async update(id: string, ArticleDto: ArticleDto): Promise<Article> {
    const article = await this.articlesRepository.findOne({ where: { id } });
    article.title = ArticleDto.title || article.title;
    article.description = ArticleDto.description || article.description;
    article.body = ArticleDto.body;
    return this.articlesRepository.save(article);
  }

  async remove(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
