import React, { Component } from "react";
import SearchResult from "./SearchResult";

class SearchResultList extends Component {
  render() {
    console.log(this.props.searchResults);

    return this.props.searchResults.map((result) => (
      <SearchResult key={result.id} searchResult={result} />
    ));
  }
}

export default SearchResultList;
