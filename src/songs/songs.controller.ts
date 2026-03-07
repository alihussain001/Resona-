import { Controller, Get, Query } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService : SongsService){}

    @Get('search')
   async searchSong(@Query('q') query: string){
        return this.songService.searchSong(query);
    }
}
