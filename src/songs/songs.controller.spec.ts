import { Test, TestingModule } from '@nestjs/testing';
import { SongsController } from './songs.controller';
import { beforeEach, describe, it } from 'node:test';

describe('SongsController', () => {
  let controller: SongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
    }).compile();

    controller = module.get<SongsController>(SongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});



