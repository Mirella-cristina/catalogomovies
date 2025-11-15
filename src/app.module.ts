import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneroModule } from './modules/genero/genero.module';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [GeneroModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
