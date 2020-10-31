import React, { Component } from "react";
import styles from "./Organizers.scss";
import classnames from "classnames";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

class PageOrganizers extends Component {
  render() {
    const organizersItems = [
      {
        name: "Text o Lence",
        link: "/static/downloads/o-lence.doc",
        more: "DOC",
      },
      {
        name: "Promo fotografie #1",
        link: "/static/downloads/promo-1.jpg",
        more: "JPG · Autor Mona Martinů",
      },
      {
        name: "Promo fotografie #2",
        link: "/static/downloads/promo-2.jpg",
        more: "JPEG · Autor Mona Martinů",
      },
      {
        name: "Stageplan + Rider (Solo)",
        link: "/static/downloads/rider-solo.pdf",
        more: "PDF",
      },
      {
        name: "Stageplan + Rider (Lenka & Kapela)",
        link: "#",
        more: "PDF",
      },
      {
        name: "Repertoárový list (Solo)",
        link: "/static/downloads/repertoarovy-list-solo.pdf",
        more: "PDF",
      },
      {
        name: "Promo fotografie Monument/Um",
        link: "/static/downloads/promo-monumentum.jpg",
        more: "JPEG · Autor Romek Hanzlík",
      },
    ];
    const itemsRender =
      organizersItems.length > 0 ? (
        organizersItems.map((item, index) => (
          <VisibilitySensor offset={{ top: 64 }} partialVisibility={"top"}>
            {({ isVisible }) => (
              <Fade opposite when={isVisible} duration={150}>
                <div className={styles["item"]}>
                  <div className={styles["item__info"]}>
                    <h2>{item.name}</h2>
                    {item.more ? <h4>{item.more}</h4> : null}
                  </div>
                  <div className={styles["item__download"]}>
                    <a href={item.link} download>
                      <svg viewBox="0 0 512 512">
                        <path d="m472 313v139c0 11.028-8.972 20-20 20h-392c-11.028 0-20-8.972-20-20v-139h-40v139c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60v-139z" />
                        <path d="m352 235.716-76 76v-311.716h-40v311.716l-76-76-28.284 28.284 124.284 124.284 124.284-124.284z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Fade>
            )}
          </VisibilitySensor>
        ))
      ) : (
        <div className={styles["items__loading"]}>Načítání položek</div>
      );
    return (
      <div className={classnames(styles["page"], styles["page--organizers"])}>
        <div className={styles["page__container"]}>
          <div className={styles["items"]}>{itemsRender}</div>
        </div>
      </div>
    );
  }
}
export default PageOrganizers;
