import React from "react";
import { SearchWrapper } from "./SearchBarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchWrapper>
        <form
          role="search"
          method="get"
          id="searchform"
          className="searchform"
          action="">
          <input
            type="search"
            onChange={this.props.onChange}
            name="s"
            id="s"
            placeholder="Search"
          />
          <button type="submit" id="searchsubmit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </SearchWrapper>
    );
  }
}
