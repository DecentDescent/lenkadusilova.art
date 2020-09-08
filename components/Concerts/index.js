import React, { Component } from "react";
import styles from "./Concerts.scss";

class PageConcerts extends Component {
  render() {
    return (
      <section className={styles["concerts"]}>
        <div className={styles["page__container"]}>
          <div className={styles["container__box"]}>
            <div className={styles["page__headline"]}>
              <h1>Koncerty</h1>
            </div>

            <div className={styles["concert"]}>
              <div className={styles["concert__date"]}>12 / 05 / 2020</div>
              <div className={styles["concert__description"]}>
                <h2>Festival Zámeček, Roztoky u Prahy</h2>
                <p>Lenka Dusilová - sólo</p>
              </div>
              <div className={styles["concert__tickets"]}>
                <button>Vstupenky</button>
              </div>
            </div>

            <div className={styles["concert"]}>
              <div className={styles["concert__date"]}>12 / 05 / 2020</div>
              <div className={styles["concert__description"]}>
                <h2>Festival Zámeček, Roztoky u Prahy</h2>
                <p>Lenka Dusilová - sólo</p>
              </div>
              <div className={styles["concert__tickets"]}>
                <button>Vstupenky</button>
              </div>
            </div>

            <div className={styles["concert"]}>
              <div className={styles["concert__date"]}>12 / 05 / 2020</div>
              <div className={styles["concert__description"]}>
                <h2>Festival Zámeček, Roztoky u Prahy</h2>
                <p>Lenka Dusilová - sólo</p>
              </div>
              <div className={styles["concert__tickets"]}>
                <button>Vstupenky</button>
              </div>
            </div>

            <div className={styles["concert"]}>
              <div className={styles["concert__date"]}>12 / 05 / 2020</div>
              <div className={styles["concert__description"]}>
                <h2>Festival Zámeček, Roztoky u Prahy</h2>
                <p>Lenka Dusilová - sólo</p>
              </div>
              <div className={styles["concert__tickets"]}>
                <button>Vstupenky</button>
              </div>
            </div>

            <div className={styles["concert"]}>
              <div className={styles["concert__date"]}>12 / 05 / 2020</div>
              <div className={styles["concert__description"]}>
                <h2>Festival Zámeček, Roztoky u Prahy</h2>
                <p>Lenka Dusilová - sólo</p>
              </div>
              <div className={styles["concert__tickets"]}>
                <button>Vstupenky</button>
              </div>
            </div>
            <div className={styles["concerts__navigation"]}>
              <a href="#" className={styles["arrow-disabled"]}>
                <svg viewBox="0 0 24 24">
                  <path
                    d="m12 0-2.1 2.1 8.4 8.4h-18.3v3h18.3l-8.4 8.4 2.1 2.1 12-12z"
                    fill="#69d9ff"
                    transform="matrix(-1 0 0 -1 24 24)"
                  />
                </svg>
              </a>

              <a href="#">
                <div className={styles["circle--full"]}></div>
              </a>
              <a href="#">
                <div className={styles["circle--empty"]}></div>
              </a>
              <a href="#">
                <div className={styles["circle--empty"]}></div>
              </a>

              <a href="#">
                <svg viewBox="0 0 24 24">
                  <path
                    d="m142 0-2.1 2.1 8.4 8.4h-18.3v3h18.3l-8.4 8.4 2.1 2.1 12-12z"
                    fill="#69d9ff"
                    transform="translate(-130)"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles["decoration"]}>
            <svg viewBox="0 0 1066 174">
              <path
                d="m423.75 814.25 59.75-77.75h60.5l-74.75 89.25 81.75 99.25h-63.5l-63.75-81.75v81.75h-49v-188.5h49zm191.75 16.5c0 7.500037 1.416653 14.416635 4.25 20.75s6.666642 11.83331 11.5 16.5 10.458301 8.291654 16.875 10.875 13.208298 3.875 20.375 3.875 13.958301-1.291654 20.375-3.875 12.083309-6.20831 17-10.875 8.791653-10.166635 11.625-16.5 4.25-13.249963 4.25-20.75-1.416653-14.416635-4.25-20.75-6.708309-11.83331-11.625-16.5-10.583301-8.291654-17-10.875-13.208298-3.875-20.375-3.875-13.958301 1.291654-20.375 3.875-12.041642 6.20831-16.875 10.875-8.666653 10.166635-11.5 16.5-4.25 13.249963-4.25 20.75zm-51.25 0c0-14.00007 2.583308-27.041606 7.75-39.125s12.333287-22.624955 21.5-31.625 20.124936-16.041641 32.875-21.125 26.79159-7.625 42.125-7.625c15.166743 0 29.166602 2.541641 42 7.625s23.874954 12.124955 33.125 21.125 16.458308 19.541606 21.625 31.625 7.75 25.12493 7.75 39.125-2.583308 27.041606-7.75 39.125-12.374954 22.624955-21.625 31.625-20.291602 16.041641-33.125 21.125-26.833257 7.625-42 7.625c-15.33341 0-29.374936-2.541641-42.125-7.625s-23.708287-12.124955-32.875-21.125-16.333308-19.541606-21.5-31.625-7.75-25.12493-7.75-39.125zm239.75 94.25v-188.5h49l90.5 115.25v-115.25h48.75v188.5h-48.75l-90.5-115.25v115.25zm363.5-125.5c-11.33339-13.833403-25.33325-20.75-42-20.75-7.33337 0-14.12497 1.33332-20.375 4s-11.62498 6.291644-16.125 10.875-8.04165 10.041635-10.625 16.375-3.875 13.16663-3.875 20.5c0 7.500037 1.29165 14.416635 3.875 20.75s6.16664 11.83331 10.75 16.5 9.9583 8.33332 16.125 11 12.8333 4 20 4c15.66674 0 29.74994-6.6666 42.25-20v58l-5 1.75c-7.50004 2.66668-14.49997 4.624994-21 5.875s-12.91664 1.875-19.25 1.875c-13.00006 0-25.45827-2.458309-37.375-7.375s-22.41662-11.833289-31.5-20.75-16.37497-19.499939-21.875-31.75-8.25-25.624928-8.25-40.125 2.70831-27.791606 8.125-39.875 12.66662-22.499956 21.75-31.25 19.62494-15.583309 31.625-20.5 24.58327-7.375 37.75-7.375c7.50004 0 14.87496.791659 22.125 2.375s14.87496 4.04165 22.875 7.375zm138.25-21.5h-58.25v31.5h55v41.5h-55v32.5h58.25v41.5h-107.25v-188.5h107.25zm84.25 42.75h9.25c9.66671 0 17.08331-1.99998 22.25-6s7.75-9.749963 7.75-17.25-2.58331-13.24998-7.75-17.25-12.58329-6-22.25-6h-9.25zm107.75 104.25h-61l-46.75-72.5v72.5h-49v-188.5h76.25c10.50005 0 19.66663 1.541651 27.5 4.625s14.29164 7.29164 19.375 12.625 8.91665 11.499965 11.5 18.5 3.875 14.49996 3.875 22.5c0 14.333405-3.4583 25.958289-10.375 34.875s-17.12493 14.958318-30.625 18.125z"
                fill="#69d9ff"
                transform="translate(-374 -731)"
              />
            </svg>
          </div>
        </div>
        <div className={styles["overlay"]}></div>
      </section>
    );
  }
}
export default PageConcerts;
