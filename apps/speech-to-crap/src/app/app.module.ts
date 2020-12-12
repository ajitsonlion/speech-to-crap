import { Module } from '@nestjs/common';

import { GiphyController } from './giphyController';
import { GiphyService } from './giphy.service';

@Module({
  imports: [],
  controllers: [GiphyController],
  providers: [GiphyService],
})
export class AppModule {}
