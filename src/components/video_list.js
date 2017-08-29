//@flow
import React from 'react';
import VideoListItem from './video_list_item';

type Video = {
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

type Props = {
  videos: Array<Video>,
  onVideoSelect: Video => void
};

const VideoList = (props: Props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
