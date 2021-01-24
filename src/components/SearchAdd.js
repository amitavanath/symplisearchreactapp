import React, { Component } from "react";

class SearchAdd extends Component {
  state = {
    searchterm: "",
    companyuri: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchterm, this.state.companyuri);
    // this.setState({ name: "" });
  };

  onSearchTermInputChange = (event) => {
    this.setState({ searchterm: event.target.value }, () =>
      console.log(this.state)
    );
  };

  onCompanyURIInputChange = (event) => {
    this.setState({ companyuri: event.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div class="ui segment">
              <div class="ui two column very relaxed grid">
                <div class="column">
                  <input
                    type="text"
                    name="searchterms"
                    placeholder="Enter Search Terms..."
                    value={this.state.searchterm}
                    onChange={this.onSearchTermInputChange}
                    className="ui input focus"
                  />
                </div>
                <div class="column">
                  <input
                    type="text"
                    name="companyuri"
                    placeholder="Enter Company URI..."
                    value={this.state.companyuri}
                    onChange={this.onCompanyURIInputChange}
                  />
                </div>
              </div>
              
            </div>

            <div className="field">
              <input type="submit" value="Submit" className="ui button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchAdd;
