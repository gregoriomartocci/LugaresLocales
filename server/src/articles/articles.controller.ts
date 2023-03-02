import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ArticleDto } from './article.dto';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Post()
  create(@Body() createArticleDto: ArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: ArticleDto,
  ): Promise<Article> {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.articlesService.remove(id);
  }
}
