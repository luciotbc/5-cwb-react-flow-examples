This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Original project [video_browser](https://github.com/StephenGrider/ReduxCasts/tree/master/video_browser).

### 1 [Install Flow](https://github.com/luciotbc/react-cwb4-flow-examples/pull/1)
#### Install Flow
`yarn add --dev flow-bin`
`yarn run flow init`
#### Run Flow
`yarn flow`

### 2 [Primitive types](https://github.com/luciotbc/react-cwb4-flow-examples/pull/2)
#### Add type to props
```
type Props = {
  onSearchTermChange: string => void
};
```
#### Add type to state
```
type State = {
  term: string
};
```
#### Add DefaultValue to state
```
state = {
    term: ''
  };
```

### 3 Object Types
#### Create Video Type
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
#### Add Video Type to props
```
type Porps = {
  video: Video,
  onVideoSelect: Video => void
};
```
#### Ref props types in a function
`const VideoListItem = ({ video, onVideoSelect }: Porps) => {...`
