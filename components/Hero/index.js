import React, { Component } from "react";
import styles from "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className={styles["hero"]}>
        <div className={styles["hero__overlay"]} />
      </section>
    );
  }
}
export default Hero;
