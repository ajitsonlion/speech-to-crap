import { GiphyFetch } from '@giphy/js-fetch-api';
import { GifResponse } from '@memer/models';

const gf = new GiphyFetch(process.env.GIPHY_API_KEY);

export async function giphySearch(query: string,sentiments:string[]): Promise<GifResponse> {
  const { data } = await gf.search(query, {
    sort: 'relevant',
    lang: 'en',
    limit: 10,
    type: 'gifs',
  });

  const gifs = data.map((gif) => gif.images);

  const gif = gifs[Math.floor(Math.random() * gifs.length)];

  return {
    gif: gif.downsized_large.url,
    preview: gif.preview_gif.url,
    method: 'Giphy search',
  };
}
