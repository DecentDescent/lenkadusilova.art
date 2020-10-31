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
            <a href="/diskografie">Diskografie</a>
          </li>
          <li>
            <a href="/koncerty">Koncerty</a>
          </li>
          <li>
            <a href="/pro-poradatele">Pro pořadatele</a>
          </li>
          <li>
            <a
              href="https://animalmusic.cz/album/lenka-dusilova-reka-0"
              target="_blank"
            >
              Shop{" "}
              <svg viewBox="0 0 24 24">
                <path d="m14 3v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7m-2 16h-14v-14h7v-2h-7c-1.11 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
