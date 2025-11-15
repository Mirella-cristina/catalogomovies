import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneroModule } from './modules/genre/genero.module';
import { MoviesModule } from './modules/movie/movies.module';

@Module({
  imports: [GeneroModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
