//@flow
import React from 'react';
import type { Video, JsEvent } from '../model';

type Props = {
  video: Video,
  onVideoSelect: Video => void
};

const VideoListItem = (props: Props) => {
  const videoSelected = (e: JsEvent) => {
    e.preventDefault();
    props.onVideoSelect(props.video);
  };

  return (
    <li onClick={videoSelected} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} />
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
