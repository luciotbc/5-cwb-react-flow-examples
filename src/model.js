//@flow
export type Video = {
  etag: string,
  snippet: {
    title: string,
    thumbnails: {
      default: {
        url: string
      }
    }
  }
};
