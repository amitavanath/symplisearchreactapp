import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    const { id, searchEngineName, positionResult } = this.props.searchResult;
    return (
      <div className="ui relaxed divided list">
        <h3 class="ui header" style={{ textTransform: 'uppercase'}}>{searchEngineName}</h3>
        <div>Search Positions</div>
        <div>{positionResult}</div>
        <div class="ui hidden divider"></div>
      </div>
    );
  }
}

export default SearchResult;
