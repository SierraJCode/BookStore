import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicSchema } from './schema/comic.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Comic', schema: ComicSchema}])],
  providers: [ComicsService],
  controllers: [ComicsController]
})
export class ComicsModule {}
