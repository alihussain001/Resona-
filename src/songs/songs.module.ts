import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { SaveSearchLog, SaveSearchLogSchema } from './schema/search-log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SaveSearchLog.name, schema: SaveSearchLogSchema },
    ]),

    HttpModule,
  ],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
