import React from "react";
import { SearchWrapper } from "./SearchBarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
    this.props.handleSearchClick(e.target.value);
  }

  render() {
    const { term } = this.state;
    return (
      <SearchWrapper>
        <form
          role="search"
          method="get"
          id="searchform"
          className="searchform"
          action=""
          onSubmit={this.onInputChange.bind(this)}>
          <input
            type="search"
            onChange={this.onInputChange}
            name="s"
            id="s"
            placeholder="熱門音樂"
            value={term}
          />
        </form>
        <button type="submit" id="searchsubmit">
          <FontAwesomeIcon icon={faSearch} />{" "}
        </button>
      </SearchWrapper>
    );
  }
}
