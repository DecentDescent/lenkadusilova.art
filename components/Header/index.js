import React, { Component } from "react";
import styles from "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <a href="/">
            <svg viewBox="0 0 48 48">
              <path
                d="m9 0h15c13.254834 0 24 10.745166 24 24 0 10.3763259-6.5849389 19.2146569-15.8039007 22.564077l-3.1763909-8.6516491c5.1786206-2.1335004 8.8506718-7.1789467 8.9769311-13.0971164l.0033605-.3153115v-1c0-8.0081289-6.4918711-14.5-14.5-14.5h-14.5z"
                className={styles["logo__l"]}
              />
              <path
                d="m9 0v39h14.999l.001 9h-24v-48z"
                className={styles["logo__d"]}
              />
            </svg>
          </a>
        </div>
      </header>
    );
  }
}
export default Header;
