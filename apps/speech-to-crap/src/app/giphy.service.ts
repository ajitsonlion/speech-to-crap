import { Injectable } from '@nestjs/common';

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
@Injectable()
export class GiphyService {
  async getGif(query: string) {
    const weirdness = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${query}&weirdness=${weirdness}`
    );

    const { data } = await response.json();

    return { gif: data.images.downsized_large.url, data, weirdness };
  }
}
