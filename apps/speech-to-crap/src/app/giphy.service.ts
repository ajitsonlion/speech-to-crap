import { Injectable } from '@nestjs/common';
import { giphyTranslate } from './GiphyTranslate';
import { giphySearch } from './GiphySearch';
import { tenorSearch } from './TenorSearch';
import { analyzeSentiment } from './sentimentAnalysis';

const GIF_SERVICES = [tenorSearch, giphySearch, giphyTranslate];

@Injectable()
export class GiphyService {
  async getGif(query: string) {
    const sentiment = await analyzeSentiment(query);

    const gifs = await Promise.all(
      GIF_SERVICES.map(
        async (gifService) => await gifService(query, sentiment.filteredReview)
      )
    );

    return { gifs, sentiment };
  }
}
