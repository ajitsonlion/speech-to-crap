const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

export async function giphyTranslate(query: string,sentiments:string[]){
  const weirdness = Math.floor(Math.random() * 10) + 1;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${query}&weirdness=${weirdness}`
  );

  const { data } = await response.json();

  return {
    gif: data.images.downsized_large.url,
    preview: data.images.preview_gif.url,
    method: 'Giphy translate',
    debug: { weirdness },
  };
}
