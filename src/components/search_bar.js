//@flow
import React, { Component } from 'react';
import type { JsEvent } from '../model';
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

  videoSelected = (e: JsEvent) => {
    e.preventDefault();
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
