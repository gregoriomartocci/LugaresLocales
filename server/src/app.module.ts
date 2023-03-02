import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'config/ormconfig';
import { ArticleModule } from './articles/article.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
