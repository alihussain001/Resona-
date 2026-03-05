import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SongsController],
  providers: [SongsService]
})
export class SongsModule {}
