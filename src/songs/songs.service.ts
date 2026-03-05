import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SongsService {
    constructor(private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ){}   
}
