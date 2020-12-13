import { Injectable } from '@nestjs/common';
import { GiphyFetch } from '@giphy/js-fetch-api';

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
const gf = new GiphyFetch(process.env.GIPHY_API_KEY);

@Injectable()
export class GiphyService {
  async getGif(query: string) {
    if (Math.random() > 0.5) {
      const { data } = await gf.search(query, {
        sort: 'relevant',
        lang: 'en',
        limit: 10,
        type: 'gifs',
      });

      const gifs = data.map((gif) => gif.images);

      const gif = gifs[Math.floor(Math.random() * gifs.length)];

      return {
        image: gif.downsized_large.url,
        preview: gif.preview_gif.url,
        method: 'search',
      };
    } else {
      const weirdness = Math.floor(Math.random() * 10) + 1;

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${query}&weirdness=${weirdness}`
      );

      const { data } = await response.json();

      return {
        image: data.images.downsized_large.url,
        preview: data.images.preview_gif.url,
        method: 'translate',
        weirdness,
      };
    }
  }
}
