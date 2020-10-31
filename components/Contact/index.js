import React, { Component } from "react";
import styles from "./Contact.scss";
import classnames from "classnames";

class PageContact extends Component {
  render() {
    return (
      <div className={classnames(styles["page"], styles["page--contact"])}>
        {/* <div className={styles["contact__hero"]}></div>

        <div className={styles["contact__content"]}>
          <div className={styles["contact-box"]}>
            <h3>Management &amp; Booking</h3>
            <p>
              Applause Booking
              <br />
              Tomáš Paleta
              <br />
              +420 774 231 568
              <br />
              <a href="mailto:tpaleta@applausebooking.cz">
                tpaleta@applausebooking.cz
              </a>
            </p>
          </div>

          <div className={styles["contact-box"]}>
            <h3>Média</h3>
            <p>
              Zdena Selingerová
              <br />
              +420 602 282 730
              <br />
              <a href="mailto:zdena.selingerova@gmail.com">
                zdena.selingerova@gmail.com
              </a>
            </p>
          </div>

          <div className={styles["contact-box"]}>
            <small>
              Photos: Bet Orten, Adam Holý, Michaela Hermína, Archiv Spitfire
              Company, M. Hradecký, Martina Mlčúchová, Jan Zrzavý, Zuzana
              Bönish, klapper.cz
            </small>
          </div>
        </div> */}
      </div>
    );
  }
}
export default PageContact;
