This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Original project [video_browser](https://github.com/StephenGrider/ReduxCasts/tree/master/video_browser).

#### [1 Install Flow](https://github.com/luciotbc/react-cwb4-flow-examples/pull/1/files)
##### Install Flow
`yarn add --dev flow-bin`
`yarn run flow init`
##### Run Flow
`yarn flow`

#### [2 Primitive Types](https://github.com/luciotbc/react-cwb4-flow-examples/pull/2/files)
##### Add type to props
```
type Props = {
  onSearchTermChange: string => void
};
```
##### Add type to state
```
type State = {
  term: string
};
```
##### Add DefaultValue to state
```
state = {
    term: ''
  };
```

#### [3 Object Types](https://github.com/luciotbc/react-cwb4-flow-examples/pull/3/files)
##### Create Video Type
```
type Video = {
  snippet: {
    title: string,
    thumbnails: {
      default: {
        url: string
      }
    }
  }
};
```
##### Add Video Type to props
```
type Porps = {
  video: Video,
  onVideoSelect: Video => void
};
```
##### Ref props types in a function
`const VideoListItem = ({ video, onVideoSelect }: Porps) => {...`

#### [4 Array Types](https://github.com/luciotbc/react-cwb4-flow-examples/pull/4/files)
##### Create Video Type
```
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
```

#### [5 Module Types](https://github.com/luciotbc/react-cwb4-flow-examples/pull/5/files)
##### Export shared types
```
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
```
##### Import shared types
`
import type { Video } from '../model'
`

#### [6 Flow in everywhere](https://github.com/luciotbc/react-cwb4-flow-examples/pull/6/files)
![flow everywhere](https://i.imgflip.com/1uyk9c.jpg)

#### [7 Add JsEvents](https://github.com/luciotbc/react-cwb4-flow-examples/pull/7/files)
##### To Clicks
```
  const videoSelected = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    props.onVideoSelect(props.video);
  };

};
```
##### To Inputs
```
  videoSelected = (e: SyntheticInputEvent<EventTarget>) => {
    e.preventDefault();
    this.onInputChange(e.target.value);
  };
```
