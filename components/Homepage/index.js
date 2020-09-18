import React, { Component } from "react";
import styles from "./Homepage.scss";
import classnames from "classnames";

class Homepage extends Component {
  render() {
    return (
      <div className={classnames(styles["page"], styles["page--homepage"])}>
        <div className={styles["homepage__container"]}></div>
      </div>
    );
  }
}
export default Homepage;
