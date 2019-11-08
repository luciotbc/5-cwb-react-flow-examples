//@flow
import React from 'react';

import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import type { Video } from './model';

const API_KEY = 'xxxxxxxx';

type Props = {};

type State = {
  videos: Array<Video>,
  selectedVideo?: Video
};

class App extends React.Component<Props, State> {
  state = {
    videos: [],
    selectedVideo: undefined
  };

  constructor(props: Props) {
    super(props);
    this.videoSearch('react conf');
  }

  videoSearch(term: string) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
