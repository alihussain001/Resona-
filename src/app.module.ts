import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory: async(configService: ConfigService) => ({
        uri: configService.get<string>("MONGO_URI"),
      }),
    }),

    SongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

console.log("MongoDB connected to resona database");
