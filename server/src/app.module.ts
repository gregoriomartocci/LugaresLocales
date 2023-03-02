import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'config/ormconfig';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
