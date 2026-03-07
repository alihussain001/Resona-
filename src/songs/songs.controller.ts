import { Controller, Get, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SearchQueryDto } from './DTO/search-query.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService : SongsService){}

    @Get('search')
   async searchSong(@Query() query: SearchQueryDto){
        return this.songService.searchSongs(query);
    }
}
