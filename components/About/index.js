import React, { Component } from "react";
import styles from "./About.scss";
import classnames from "classnames";

class PageAbout extends Component {
  render() {
    return (
      <div className={classnames(styles["page"], styles["page--about"])}></div>
    );
  }
}
export default PageAbout;
