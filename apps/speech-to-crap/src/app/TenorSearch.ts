import { TenorResponse } from './TenorResponse';
import { GifResponse } from './response';

const TENOR_API_KEY = process.env.TENOR_API_KEY;

export async function tenorSearch(query: string): Promise<GifResponse> {
  const lmt = 10;

  // using default locale of en_US
  const search_url = `https://api.tenor.com/v1/search?q=${query}&key=${TENOR_API_KEY}&limit=${lmt}&media_filter=minimal`;

  const response = await fetch(search_url);

  const data: TenorResponse = await response.json();

  const results = data.results;

  const result = results[Math.floor(Math.random() * results.length)];

  return {
    gif: result.media[0].gif.url,
    preview: result.media[0].gif.preview,
    method: 'Tenor Search',
  };
}
