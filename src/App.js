import React from "react";
import axios from "axios";

import SearchResultList from "./components/SearchResultList";
import SearchAdd from "./components/SearchAdd";

import "./App.css";

class App extends React.Component {
  state = {
    searchresults: [],
  };

  componentDidMount() {
    axios
      .get("/search")
      .then((res) => this.setState({ searchresults: res.data }));
  }

  onSearchSubmit = (searchterm, companyuri) => {
    axios
      .get("/search", {
        params: {
          searchterm: searchterm,
          companyuri: companyuri,
        },
      })
      .then((res) => this.setState({ searchresults: res.data }));
  };

  render() {
    return (
      <div className="container">
        <SearchAdd onSearchSubmit={this.onSearchSubmit} />
        <SearchResultList searchResults={this.state.searchresults} />
      </div>
    );
  }
}

export default App;
