import React, { Component } from "react";
import HeadComponent from "../components/Head";
import Header from "../components/Header";
import Homepage from "../components/Homepage";

import "../styles/global.scss";

class Index extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <>
        <HeadComponent />
        <Header />
        <Homepage />
      </>
    );
  }
}

export default Index;
