import React from "react";
import { HeaderWrapper } from "./HeaderStyle.js";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HeaderWrapper> This is Header. </HeaderWrapper>;
  }
}
