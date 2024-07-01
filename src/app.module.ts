import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { ComicsModule } from './comics/comics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-book-store'),
    BooksModule,
    ComicsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
