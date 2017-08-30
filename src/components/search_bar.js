//@flow
import React, { Component } from 'react';

type Props = {
  onSearchTermChange: string => void
};

type State = {
  term: string
};

class SearchBar extends Component<Props, State> {
  state = {
    term: ''
  };

  videoSelected = (e: SyntheticInputEvent<EventTarget>) => {
    e.preventDefault();
    e.stopPropagation();
    this.onInputChange(e.target.value);
  };

  onInputChange = (term: string) => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.videoSelected} />
      </div>
    );
  }
}

export default SearchBar;
