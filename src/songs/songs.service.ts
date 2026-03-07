import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SongsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async searchSong(query: string) {
    if (!query) {
      return { message: 'Seacrh query is required' };
    }

    const baseUrl = this.configService.get<string>('DEEZER_API_URL');
    const url = `${baseUrl}/search?q=${query}`

    const response = await firstValueFrom(
        this.httpService.get(url),
    );

    const songs = response.data.data;

    return songs.map((song: any) => ({
        title: song.title,
        arist: song.artist.name,
        album: song.album.name,
        cover: song.album.cover_medium,
        preview: song.preview,
    }))
  }
}
