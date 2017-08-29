// @flow
import React, { Component } from 'react';

type Props = {
  onSearchTermChange: string => void
};

class SearchBar extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term: string) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
