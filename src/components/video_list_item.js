//@flow
import React from 'react';
import type { Video } from '../model';

type Props = {
  video: Video,
  onVideoSelect: Video => void
};

const VideoListItem = (props: Props) => {
  const imageUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
