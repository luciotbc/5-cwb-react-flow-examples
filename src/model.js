//@flow
export type Video = {
  etag: string,
  id: {
    videoId: string
  },
  snippet: {
    description: string,
    title: string,
    thumbnails: {
      default: {
        url: string
      }
    }
  }
};
