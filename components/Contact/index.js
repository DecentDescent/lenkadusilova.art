import React, { Component } from "react";
import styles from "./Contact.scss";
import classnames from "classnames";

class PageContact extends Component {
  render() {
    return (
      <div className={classnames(styles["page"], styles["page--contact"])}>
        <div className={styles["contact__container"]}>
          <div className={styles["contact-box"]}>
            <h3>Management &amp; Booking</h3>
            <p>
              Applause Booking
              <br />
              Tomáš Paleta
              <br />
              +420 774 231 568
              <br />
              tpaleta@applausebooking.cz
            </p>
          </div>

          <div className={styles["contact-box"]}>
            <h3>Média</h3>
            <p>
              Spňa Paleta
              <br />
              +420 608 923 442
              <br />
              sona@applausebooking.cz
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PageContact;
