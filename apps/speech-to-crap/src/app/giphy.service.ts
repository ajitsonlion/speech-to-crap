import { Injectable } from '@nestjs/common';
import { giphyTranslate } from './GiphyTranslate';
import { giphySearch } from './GiphySearch';
import { tenorSearch } from './TenorSearch';
import { GifResponse } from './response';

const GIF_SERVICES = [tenorSearch, giphySearch, giphyTranslate];

@Injectable()
export class GiphyService {
  async getGif(query: string): Promise<GifResponse> {
    const gifService =
      GIF_SERVICES[Math.floor(Math.random() * GIF_SERVICES.length)];

    return await gifService(query);
  }
}
