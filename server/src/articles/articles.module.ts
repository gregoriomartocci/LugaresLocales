import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticlesRepository } from './articles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository],
})
export class ArticlesModule {}
