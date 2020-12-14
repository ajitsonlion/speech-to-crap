export interface GifResponse {
  gifs: {
    gif: string;
    preview: string;
    method: string;
    debug?: any;
  }[];
  sentiment: {
    analysis: number;
    filteredReview: string[];
  };
}
