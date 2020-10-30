import React, { Component } from "react";
import styles from "./Organizers.scss";
import classnames from "classnames";

class PageOrganizers extends Component {
  render() {
    return (
      <div
        className={classnames(styles["page"], styles["page--organizers"])}
      ></div>
    );
  }
}
export default PageOrganizers;
