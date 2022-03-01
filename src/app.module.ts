import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [LivrosModule],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
