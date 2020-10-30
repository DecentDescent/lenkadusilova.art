import React, { Component } from "react";
import styles from "./Homepage.scss";
import classnames from "classnames";

class Homepage extends Component {
  render() {
    return (
      <div className={classnames(styles["page"], styles["page--homepage"])}>
        <div className={styles["homepage__container"]}>
          <div className={styles["container__left"]}>
            <img src="/static/graphics/reka.jpg" />
          </div>
          <div className={styles["container__right"]}>
            <h2>Nová deska</h2>
            <hr />
            <h1>
              <span>·</span>Ř<span>·</span>e<span>·</span>k<span>·</span>a
              <span>·</span>
            </h1>
            <hr />
            <h3>Vychází 6. listopadu</h3>
            <h2>na CD &amp; LP</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
