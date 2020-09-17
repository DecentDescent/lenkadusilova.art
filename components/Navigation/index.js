import React from "react";
import styles from "./Navigation.scss";
import classnames from "classnames";

export default function Navigation(props) {
  return (
    <nav
      className={classnames({
        [styles["navigation"]]: true,
        [styles["navigation--active"]]: props.navActive,
      })}
    >
      <div className={styles["navigation__background"]}></div>
      <div className={styles["navigation__menu"]}>
        <ul className={styles["menu__items"]}>
          <li>
            <a href="/o-lence">O Lence</a>
          </li>
          <li>
            <a href="/koncerty">Koncerty</a>
          </li>
          <li>
            <a href="/diskografie">Diskografie</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/pro-poradatele">Pro pořadatele</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
