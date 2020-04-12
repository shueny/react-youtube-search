import React from "react";
import { HeaderWrapper, Title } from "./HeaderStyle.js";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderWrapper>
        <Title> {this.props.title} </Title>{" "}
      </HeaderWrapper>
    );
  }
}
