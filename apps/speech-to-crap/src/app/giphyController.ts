import { Controller, Get, Query } from '@nestjs/common';

import { GiphyService } from './giphy.service';

@Controller('gif')
export class GiphyController {
  constructor(private readonly appService: GiphyService) {}

  @Get()
  async getGif(@Query('query') query) {
    return this.appService.getGif(query);
  }
}
