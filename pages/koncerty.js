import React, { Component } from "react";
import HeadComponent from "../components/Head";
import Header from "../components/Header";
import PageConcerts from "../components/Concerts";

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
        <HeadComponent title="Koncerty" />
        <Header title="Koncerty" />
        <PageConcerts />
      </>
    );
  }
}

export default Index;
