import { HttpService } from '@nestjs/axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { SearchQueryDto } from './DTO/search-query.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  SaveSearchLog,
  SaveSearchLogDocument,
} from './schema/search-log.schema';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(SaveSearchLog.name)
    private saveSearchLogModel: Model<SaveSearchLogDocument>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async searchSongs(dto: SearchQueryDto) {
    const baseUrl = this.configService.get<string>('DEEZER_API_URL');
    const url = `${baseUrl}/search?q=${dto.q}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      if (!response || !response.data || !response.data.data) {
        throw new ServiceUnavailableException(
          'Music service is temporarily unavailable',
        );
      }
      const songs = response.data.data;
      this.saveSearchLog(dto.q, songs.length);
      console.log("API Response Songs:", songs);    
      console.log("Passing resultCount:", songs.length);

      return songs.map((song: any) => ({
        title: song.title,
        artist: song.artist.name,
        album: song.album.name,
        cover: song.album.cover_medium,
        preview: song.preview,
      }));
    } catch (error) {
      throw new ServiceUnavailableException(
        'Music service is temporarily unavailable',
      );
    }
  }

  async saveSearchLog(query: string, resultCount: number){
    try{
        const updatedLog = await this.saveSearchLogModel.findOneAndUpdate(
            {query: query},
            {
                $inc: {count: 1},
                $set:{resultCount: resultCount}
            },
            {
                new: true,
                upsert: true,
            }
        );
        console.log("Search log updated:", updatedLog)
    }catch(error){
        console.log("Failed to save the search log:", error)
    }
  }
}
